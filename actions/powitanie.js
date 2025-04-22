module.exports = {
  name: "Powitanie z grafiką",
  section: "Obrazy i Canvas",
  author: "TwojNick",
  version: "1.0.3",
  short_description: "Tworzy powitalną grafikę z tekstami i embedem",

  fields: [
    "fontPath", "backgroundImageURL",
    "fontColor", "avatarBorderColor",
    "fontSize1", "fontSize2", "fontSize3", "fontSize4",
    "text1", "text2", "text3", "text4",
    "text1X", "text1Y", "text2X", "text2Y", "text3X", "text3Y", "text4X", "text4Y",
    "avatarX", "avatarY",
    "embedTitle", "embedDesc", "embedColor", "channelID"
  ],

  html(isEvent, data) {
    return `
      <div style="padding: 10px;">
        <tab-system>
          <tab label="Grafika" icon="image">
            <div style="padding: 10px;">
              <label><b>Ścieżka do czcionki</b></label>
              <input id="fontPath" class="round" type="text" style="width: 100%; margin-bottom: 10px;">

              <label><b>URL tła obrazu</b></label>
              <input id="backgroundImageURL" class="round" type="text" style="width: 100%; margin-bottom: 10px;">

              <label><b>Kolor tekstów</b></label>
              <input id="fontColor" class="round" type="text" placeholder="#ffffff" style="width: 100%; margin-bottom: 10px;">

              <label><b>Kolor obramowania awatara</b></label>
              <input id="avatarBorderColor" class="round" type="text" placeholder="#ffffff" style="width: 100%;">

              <div style="margin-top: 10px;">
                <label><b>Rozmiar czcionki tekstów</b></label>
                <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                  <input id="fontSize1" class="round" type="number" placeholder="Text1 (px)" style="width: 100%;">
                  <input id="fontSize2" class="round" type="number" placeholder="Text2 (px)" style="width: 100%;">
                </div>
                <div style="display: flex; gap: 10px;">
                  <input id="fontSize3" class="round" type="number" placeholder="Text3 (px)" style="width: 100%;">
                  <input id="fontSize4" class="round" type="number" placeholder="Text4 (px)" style="width: 100%;">
                </div>
              </div>
            </div>
          </tab>

          <tab label="Teksty" icon="font">
            <div style="padding: 10px;">
              <label><b>1. Tekst</b></label>
              <input id="text1" class="round" type="text" style="width: 100%; margin-bottom: 15px;">
              <label><b>2. Tekst</b></label>
              <input id="text2" class="round" type="text" style="width: 100%; margin-bottom: 15px;">
              <label><b>3. Tekst</b></label>
              <input id="text3" class="round" type="text" style="width: 100%; margin-bottom: 15px;">
              <label><b>4. Tekst</b></label>
              <input id="text4" class="round" type="text" style="width: 100%; margin-bottom: 15px;">
            </div>
          </tab>

          <tab label="Pozycje tekstów" icon="move">
            <div style="padding: 10px;">
              <label><b>Tekst 1 (X, Y)</b></label>
              <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <input id="text1X" class="round" type="number" placeholder="X" style="width: 100%;">
                <input id="text1Y" class="round" type="number" placeholder="Y" style="width: 100%;">
              </div>

              <label><b>Tekst 2 (X, Y)</b></label>
              <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <input id="text2X" class="round" type="number" placeholder="X" style="width: 100%;">
                <input id="text2Y" class="round" type="number" placeholder="Y" style="width: 100%;">
              </div>

              <label><b>Tekst 3 (X, Y)</b></label>
              <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <input id="text3X" class="round" type="number" placeholder="X" style="width: 100%;">
                <input id="text3Y" class="round" type="number" placeholder="Y" style="width: 100%;">
              </div>

              <label><b>Tekst 4 (X, Y)</b></label>
              <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <input id="text4X" class="round" type="number" placeholder="X" style="width: 100%;">
                <input id="text4Y" class="round" type="number" placeholder="Y" style="width: 100%;">
              </div>

              <label><b>Pozycja awatara (X, Y)</b></label>
              <div style="display: flex; gap: 10px; margin-bottom: 10px;">
                <input id="avatarX" class="round" type="number" placeholder="X" style="width: 100%;">
                <input id="avatarY" class="round" type="number" placeholder="Y" style="width: 100%;">
              </div>
            </div>
          </tab>

          <tab label="Embed" icon="file">
            <div style="padding: 10px;">
              <label><b>Tytuł embeda</b></label>
              <input id="embedTitle" class="round" type="text" style="width: 100%; margin-bottom: 15px;">
              <label><b>Opis embeda</b></label>
              <textarea id="embedDesc" class="round" rows="2" style="width: 100%; resize: none; margin-bottom: 15px;"></textarea>
              <label><b>Kolor embeda</b></label>
              <input id="embedColor" class="round" type="text" style="width: 100%; margin-bottom: 15px;">
              <label><b>ID kanału do wysyłki</b></label>
              <input id="channelID" class="round" type="text" style="width: 100%;">
            </div>
          </tab>
        </tab-system>
      </div>`;
  },

  async action(cache) {
    const { MessageAttachment, MessageEmbed } = require("discord.js");
    const Canvas = require("canvas");
    const path = require("path");

    const data = cache.actions[cache.index];

    function getVal(field) {
      const val = this.evalMessage(data[field], cache);
      return isNaN(val) ? val.trim() : parseInt(val);
    }

    const fontPath = this.evalMessage(data.fontPath, cache);
    const backgroundImageURL = this.evalMessage(data.backgroundImageURL, cache);
    const fontColor = this.evalMessage(data.fontColor, cache) || "#ffffff";
    const avatarBorderColor = this.evalMessage(data.avatarBorderColor, cache) || "#ffffff";

    const text1 = this.evalMessage(data.text1, cache);
    const text2 = this.evalMessage(data.text2, cache);
    const text3 = this.evalMessage(data.text3, cache);
    const text4 = this.evalMessage(data.text4, cache);

    const text1X = getVal.call(this, "text1X");
    const text1Y = getVal.call(this, "text1Y");
    const text2X = getVal.call(this, "text2X");
    const text2Y = getVal.call(this, "text2Y");
    const text3X = getVal.call(this, "text3X");
    const text3Y = getVal.call(this, "text3Y");
    const text4X = getVal.call(this, "text4X");
    const text4Y = getVal.call(this, "text4Y");

    const fontSize1 = parseInt(this.evalMessage(data.fontSize1, cache)) || 64;
    const fontSize2 = parseInt(this.evalMessage(data.fontSize2, cache)) || 72;
    const fontSize3 = parseInt(this.evalMessage(data.fontSize3, cache)) || 50;
    const fontSize4 = parseInt(this.evalMessage(data.fontSize4, cache)) || 50;

    const avatarX = getVal.call(this, "avatarX");
    const avatarY = getVal.call(this, "avatarY");

    const embedTitle = this.evalMessage(data.embedTitle, cache);
    const embedDesc = this.evalMessage(data.embedDesc, cache);
    const embedColor = this.evalMessage(data.embedColor, cache);
    const channelID = this.evalMessage(data.channelID, cache);

    const member = this.getVariable(1, "member", cache);
    const username = member?.user?.username || "Użytkownik";
    const guild = member?.guild;

    if (fontPath) {
      Canvas.registerFont(path.join(process.cwd(), fontPath), { family: "CustomFont" });
    }

    const canvas = Canvas.createCanvas(1280, 720);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage(backgroundImageURL || "https://i.imgur.com/5WEovaC.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatarURL = member.user.displayAvatarURL({ format: "png", size: 512 });
    const avatar = await Canvas.loadImage(avatarURL);
    const avatarSize = 256;

    // 🔥 avatar centrowany jeśli "auto" lub 0
    let avatarXPos = avatarX;
    if (avatarX === 0 || avatarX === "auto") {
      avatarXPos = (canvas.width - avatarSize) / 2;
    }

    const avatarYPos = avatarY || 260;

    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarXPos + avatarSize / 2, avatarYPos + avatarSize / 2, avatarSize / 2 + 10, 0, Math.PI * 2);
    ctx.strokeStyle = avatarBorderColor;
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.clip();

    ctx.beginPath();
    ctx.arc(avatarXPos + avatarSize / 2, avatarYPos + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(avatar, avatarXPos, avatarYPos, avatarSize, avatarSize);
    ctx.restore();

    const humanCount = guild.members.cache.filter(m => !m.user.bot).size;
    const text4Final = text4.replace("{count}", humanCount);
    const text2Final = text2.replace("{username}", username);
    const text1Final = text1.replace("{username}", username);


    ctx.fillStyle = fontColor;

    // Funkcja normalizująca teksty
    function normalizeText(text) {
      return text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x00-\x7F]/g, "");
    }

    function drawSmart(text, x, y, fontSize) {
      ctx.font = `bold ${fontSize}px CustomFont`;
      const normalizedText = normalizeText(text);  // Zastosowanie normalizacji
      if (x === 0 || x === "auto") {
        ctx.textAlign = "center";
        ctx.fillText(normalizedText, canvas.width / 2, y);
      } else {
        ctx.textAlign = "left";
        ctx.fillText(normalizedText, x, y);
      }
    }

    drawSmart(text1Final, text1X, text1Y, fontSize1);
        drawSmart(text2Final, text2X, text2Y, fontSize2);
    drawSmart(text3, text3X, text3Y, fontSize3);
    drawSmart(text4Final, text4X, text4Y, fontSize4);

    const attachment = new MessageAttachment(canvas.toBuffer(), "powitanie.png");

    const embed = new MessageEmbed()
      .setColor(embedColor || "#00ff99")
      .setTitle(embedTitle.replace("{username}", username))
      .setDescription(embedDesc.replace("{count}", humanCount))
      .setImage("attachment://powitanie.png");

    const channel = guild.channels.cache.get(channelID);
    if (channel) {
      channel.send({ embeds: [embed], files: [attachment] }).catch(console.error);
    }

    this.callNextAction(cache);
  },

  mod() {}
};
