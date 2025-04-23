const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const { XMLParser } = require("fast-xml-parser");

module.exports = {
  name: "Google News Fetcher",
  section: "Other Stuff",

  subtitle(data) {
    return `Kategoria: ${data.category}`;
  },

  fields: ["category"],

  html() {
    return `
      <div style="padding: 15px;">
        <span class="dbminputlabel">Kategoria wiadomości (np. world, nation, business, technology, entertainment, sports, science, health) lub "all"</span><br>
        <input id="category" class="round" type="text" placeholder="all"><br><br>
      </div>
    `;
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const category = this.evalMessage(data.category, cache) || "all";
    let channel;

    channel = cache.msg?.channel || cache.interaction?.channel;

    if (!channel) {
      console.error("Nie znaleziono kanału!");
      return this.callNextAction(cache);
    }

    try {
      const rssUrl = category === "all"
        ? "https://news.google.com/rss?hl=pl&gl=PL&ceid=PL:pl"
        : `https://news.google.com/rss/headlines/section/topic/${category.toUpperCase()}?hl=pl&gl=PL&ceid=PL:pl`;

        
      const { MessageEmbed } = require("discord.js");
      const axios = require("axios");
      const { XMLParser } = require("fast-xml-parser");
      const response = await axios.get(rssUrl);
      const parser = new XMLParser();
      const feed = parser.parse(response.data);

      const items = feed.rss?.channel?.item;
      if (!items || items.length === 0) {
        console.error("Brak artykułów w RSS.");
        return this.callNextAction(cache);
      }

      const article = items[Math.floor(Math.random() * items.length)];

      let description = (article.description || "")
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .trim();

      if (description.length > 2048) description = description.substring(0, 2045) + "...";

      const embed = new MessageEmbed()
        .setTitle(article.title || "Brak tytułu")
        .setURL(article.link)
        .setDescription(description)
        .setColor("#0078D4");

      if (cache.interaction?.reply) {
        try {
          await cache.interaction.reply({
            content: "📰 Nowe wiadomości z Google News:",
            embeds: [embed],
            ephemeral: false,
          });
        } catch (err) {
          console.error("Błąd przy reply interakcji:", err);
        }
      } else if (cache.msg?.reply) {
        try {
          await cache.msg.reply({
            content: "📰 Nowe wiadomości z Google News:",
            embeds: [embed],
          });
        } catch (err) {
          console.error("Błąd przy reply wiadomości:", err);
        }
      } else {
        await channel.send({
          content: "📰 Nowe wiadomości z Google News:",
          embeds: [embed],
        });
      }

    } catch (err) {
      console.error("Błąd pobierania RSS:", err);
    }

    this.callNextAction(cache);
  },

  mod() {},
};
