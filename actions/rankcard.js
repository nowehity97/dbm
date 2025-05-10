module.exports = {
    name: "Generate Rank Card",
    section: "Image & Embed",
    author: "Hit stary",
  
    subtitle(data) {
      return `Rank card for variable: ${data.usernameVar}`;
    },
  
    fields: [
      "usernameVar", "usernameVarType",
      "avatarVar", "avatarVarType",
      "levelVar", "levelVarType",
      "rankVar", "rankVarType",
      "minXPVar", "minXPVarType",
      "maxXPVar", "maxXPVarType",
      "color"
    ],
  
    html(isEvent, data) {
      return `
    <style>
      .dbm-row { display: flex; gap: 10px; margin-bottom: 10px; }
      .dbm-row > div { flex: 1; }
    </style>
    
    <div class="dbm-row">
      <div>
        <span class="dbminputlabel">Username Variable</span><br>
        <select id="usernameVarType" class="round">
          ${data.variables[1]}
        </select>
        <input id="usernameVar" class="round" type="text">
      </div>
    
      <div>
        <span class="dbminputlabel">Avatar URL Variable</span><br>
        <select id="avatarVarType" class="round">
          ${data.variables[1]}
        </select>
        <input id="avatarVar" class="round" type="text">
      </div>
    </div>
    
    <div class="dbm-row">
      <div>
        <span class="dbminputlabel">Level Variable</span><br>
        <select id="levelVarType" class="round">
          ${data.variables[1]}
        </select>
        <input id="levelVar" class="round" type="text">
      </div>
    
      <div>
        <span class="dbminputlabel">Rank Variable</span><br>
        <select id="rankVarType" class="round">
          ${data.variables[1]}
        </select>
        <input id="rankVar" class="round" type="text">
      </div>
    </div>
  
    <div class="dbm-row">
      <div>
        <span class="dbminputlabel">Minimum XP Variable</span><br>
        <select id="minXPVarType" class="round">
          ${data.variables[1]}
        </select>
        <input id="minXPVar" class="round" type="text">
      </div>
    
      <div>
        <span class="dbminputlabel">Maximum XP Variable</span><br>
        <select id="maxXPVarType" class="round">
          ${data.variables[1]}
        </select>
        <input id="maxXPVar" class="round" type="text">
      </div>
    </div>
  
    <div>
      <span class="dbminputlabel">Card Color (HEX)</span><br>
      <input id="color" class="round" type="text" placeholder="#FFC0CB">
    </div>
    `;
    },
  
    init() {},
  
    async action(cache) {
      const data = cache.actions[cache.index];
  
      const username = this.getVariable(parseInt(data.usernameVarType), data.usernameVar, cache);
      const avatar = this.getVariable(parseInt(data.avatarVarType), data.avatarVar, cache);
      const level = this.getVariable(parseInt(data.levelVarType), data.levelVar, cache);
      const rank = this.getVariable(parseInt(data.rankVarType), data.rankVar, cache);
      const minXP = this.getVariable(parseInt(data.minXPVarType), data.minXPVar, cache);
      const maxXP = this.getVariable(parseInt(data.maxXPVarType), data.maxXPVar, cache);
      const color = this.evalMessage(data.color, cache) || "#FFC0CB";
  
      // Obliczanie procentowego postępu
      const progress = Math.min(Math.max(((maxXP - minXP) === 0 ? 0 : (minXP / maxXP)) * 100, 0), 100);
  
      const { RankCard } = require("rankcard");
      const { MessageAttachment, MessageEmbed } = require("discord.js");
  
      try {
        const card = await RankCard({
          name: username,
          level: `Level ${level}`,
          color: color,
          shape: "circle",
          brightness: "50",
          avatar: avatar,
          progress: progress,
          rank: rank,
          requiredXp: maxXP,
          currentXp: minXP,
          showXp: true
        });
  
        const attachment = new MessageAttachment(card, "rankcard.png");
        const embed = new MessageEmbed()
          .setColor("RANDOM")
           .setTimestamp()          
           .setAuthor(username, avatar)
          .setImage("attachment://rankcard.png");
        
        // Obsługa Slash Command
        if (cache.interaction && cache.interaction.reply) {
          await cache.interaction.reply({ embeds: [embed], files: [attachment] });
        } else if (cache.msg && cache.msg.channel) {
          cache.msg.channel.send({ embeds: [embed], files: [attachment] });
        } else {
          console.warn("❗ Nie znaleziono ani interaction, ani msg");
        }
  
      } catch (err) {
        console.error("❌ RankCard Error:", err);
      }
  
      this.callNextAction(cache);
    },
  
    mod() {}
  };
  
