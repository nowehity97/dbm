const fetch = require("node-fetch");

module.exports = {
  name: "Co Gra W Radiu",
  section: "Other Stuff",
  fields: ["streamUrl"],

  html(isEvent, data) {
    return `
<div style="padding: 8px;">
  <p><strong>Co Gra W Radiu</strong><br>
  Wpisz pełny URL streama, np. <code>http://rs6-krk2.rmfstream.pl/rmf_maxxx</code></p>
  <label>Stream URL:</label>
  <input id="streamUrl" class="round" type="text" placeholder="http://..." style="width: 100%">
</div>`;
  },
  subtitle(data) {
    return `URL: ${data.streamUrl || "Brak URL"}`;
  },
  async action(cache) {
    const data = cache.actions[cache.index];
    const streamUrl = this.evalMessage(data.streamUrl, cache);

    if (!streamUrl) {
      console.log("❌ Nie podano URL streama.");
      return this.callNextAction(cache);
    }

    const apiUrl = `https://api.wiedzminpolska.xyz/radioinfo?url=${encodeURIComponent(streamUrl)}`;

    let info = { title: "Brak danych", description: "Nieznana stacja" };

    try {
      const res = await fetch(apiUrl);
      const json = await res.json();

      info.title = json.title?.trim() || "Brak danych";

      // 🔥 OGARNIAMY STACJĘ
      if (!json.description || json.description.trim().toLowerCase() === "unspecified description") {
        // Wyciągamy ostatnią część ścieżki z URL (np. rmf_maxxx)
        const match = streamUrl.match(/\/([^\/?#]+)(?:[?#]|$)/i);
        const fallbackName = match ? decodeURIComponent(match[1]).replace(/_/g, " ").toUpperCase() : null;
        info.description = fallbackName || "Nieznana stacja";
      } else {
        info.description = json.description.trim();
      }

    } catch (err) {
      console.error("❌ Błąd przy pobieraniu danych z API:", err);
    }

    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setColor("#00ccff")
      .setTitle("🎶 Co teraz gra w radiu?")
      .addFields(
        { name: "▶️ Utwór", value: info.title, inline: false },
        { name: "📻 Stacja", value: info.description, inline: false }
      )
      .setTimestamp()
      .setFooter({ text: "powered by api.wiedzminpolska.xyz" });

    if (cache.interaction) {
      cache.interaction.reply({ embeds: [embed], ephemeral: false }).catch(console.error);
    } else if (cache.msg) {
      cache.msg.channel.send({ embeds: [embed] }).catch(console.error);
    }

    this.callNextAction(cache);
  },

  mod() {},
};
