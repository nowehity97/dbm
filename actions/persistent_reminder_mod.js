const fs = require("fs");
const pathDir = "./reminders";
const pathFile = `${pathDir}/reminders.json`;

// Sprawdź i stwórz folder i plik jeśli ich nie ma
if (!fs.existsSync(pathDir)) {
  fs.mkdirSync(pathDir, { recursive: true });
}
if (!fs.existsSync(pathFile)) {
  fs.writeFileSync(pathFile, "[]");
}

module.exports = {
  name: "Reminder",
  section: "Messaging",

  meta: {
    version: "2.1.7",
    preciseCheck: false,
    author: "Hit",
  },

  subtitle(data) {
    return `Przypomnienie za ${data.time || "slash param"} sek`;
  },

  fields: ["time", "message"],

  html() {
    return `
      <div style="padding: 15px;">
        <span class="dbminputlabel">Czas (w sekundach) — fallback z GUI, jeśli brak slash param</span><br>
        <input id="time" class="round" type="text" placeholder="np. 60 lub zmienna temp (nie dla slasha)"><br><br>
        <span class="dbminputlabel">Treść przypomnienia</span><br>
        <textarea id="message" rows="4" style="width:100%;resize:none;"></textarea>
      </div>
    `;
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const interaction = cache.interaction;
    let time;

    // Jeśli slash interaction i parametr czas jest liczba
    if (interaction && interaction.options?.getNumber) {
      time = interaction.options.getInteger("czas");
    }

    // Fallback: z pola GUI, jeśli nie ma slasha lub parametru
    if (!time) {
      const rawTime = this.evalMessage(data.time, cache);
      time = parseInt(rawTime, 10);
    }

    const message = this.evalMessage(data.message, cache);
    const channel = interaction?.channel || cache.msg?.channel;
    const author = interaction?.user || cache.msg?.author;

    if (!channel || !author || isNaN(time) || time <= 0) {
      console.log("❌ Nieprawidłowy czas / brak kanału / brak autora");
      return this.callNextAction(cache);
    }

    const reminder = {
      id: Date.now(),
      channelId: channel.id,
      userId: author.id,
      message: message,
      timestamp: Date.now() + time * 1000,
    };

    // Wczytaj przypomnienia
    let reminders = [];
    try {
      const fileData = fs.readFileSync(pathFile);
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) reminders = parsed;
    } catch (err) {
      console.error("❌ Błąd czytania JSON:", err);
    }

    reminders.push(reminder);
    fs.writeFileSync(pathFile, JSON.stringify(reminders, null, 2));

    // Odpowiedź na slash lub wiadomość
    if (interaction && !interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: `📌 <@${author.id}> — przypomnienie "**${message}**" ustawione na ${time} sekund.`,
        ephemeral: true,
      });
    } else {
      await channel.send(`📌 <@${author.id}> — przypomnienie "**${message}**" zapisane na ${time} sekund.`);
    }

    // Timer przypomnienia
    setTimeout(async () => {
      const targetChannel = channel.guild.channels.cache.get(reminder.channelId);
      if (targetChannel) {
        await targetChannel.send(`⏰ <@${reminder.userId}>, twoje przypomnienie: **${reminder.message}**`);
      } else {
        console.log("❌ Kanał nie znaleziony przy odpaleniu przypomnienia");
      }
    }, time * 1000);

    this.callNextAction(cache);
  },

  mod() {
  },
};
