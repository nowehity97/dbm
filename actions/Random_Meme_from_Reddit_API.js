const axios = require('axios');

module.exports = {
  name: "Random Meme from Reddit API",
  section: "Internet",

  meta: {
    version: "2.1.7",
    preciseCheck: false,
    author: "Hit Stary",
  },

  subtitle(data) {
    return `Subreddit: ${data.subreddit}`;
  },

  fields: ["subreddit"],

  html() {
    return `
      <div style="padding: 15px;">
              <span class="dbminputlabel">Podaj nazwe subreddita (na przykład polska_wpz)</span><br>
        <input id="subreddit" class="round" type="text" placeholder="wpisz nazwę"><br><br>
      </div>
    `;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, 'String'];
  },

  async action(cache) {
    const data = cache.actions[cache.index];

    try {
      const response = await axios.get(`https://meme-api.com/gimme/${data.subreddit}`);
      if (!response || !response.data) {
        console.error('❌ Brak danych z Reddit API');
        return this.callNextAction(cache);
      }
      if (response.data.error) {
        console.error('❌ Błąd z Reddit API:', response.data.error);
        return this.callNextAction(cache);
      }

      const memeData = {
        url: response.data.url,
        postLink: response.data.postLink,
        title: response.data.title,
        postauthor: response.data.author,
        ups: response.data.ups,
        subreddit: response.data.subreddit,
      };
        

      const info = data.info;
      const value = memeData[info];
      const { MessageEmbed } = require("discord.js");

      const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(memeData.title)
      .setURL(memeData.postLink)
      .setDescription(`**Autor ${memeData.postauthor}**\n**Ocena** ${memeData.ups} \n**${memeData.title}**\n\n**Link:** [Kliknij tutaj](${memeData.postLink})`)
      .setImage(memeData.url)
      .setFooter({ text:`Subreddit: ${memeData.subreddit}` })
      .setTimestamp();
      if (cache.interaction?.reply) {
        await cache.interaction.reply({ embeds: [embed] });
      }
      if (cache.msg?.channel) {
        await cache.msg.channel.send({ embeds: [embed] });
      }
    }
    catch (error) {
      console.error('❌ Błąd:', error);
      this.callNextAction(cache);
    }

    this.callNextAction(cache);
  },

  mod() {},
};
