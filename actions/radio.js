module.exports = {
       name: "Radio",
       section: "Audio Control",
       requiresAudioLibraries: true,
   
       variableStorage(data, varType) {
           if (1 !== varType) return;
           return ["radio", "Nazwa Stacji", "strona", "Strona Stacji", "url", "Link do radia", "img", "Zdjęcie stacji"];
       },
       
       meta: { 
           version: "2.1.6", 
           preciseCheck: true, 
           author: 'Gotowka, Hit Stary', 
       },
       
       fields: ["channel", "varName", "station"],
       
       subtitle() {
           return `Odtwarzaj radio`;
       },
       
       html(isEvent, data) {
           return `
           <div>
               <p><u>Mod Info:</u><br>Created by money#6283 edit hit stary</p>
           </div><br>
           
           <div>
               <voice-channel-input 
                   dropdownLabel="Voice Channel" 
                   selectId="channel" 
                   variableContainerId="varNameContainer" 
                   variableInputId="varName" 
                   selectWidth="45%" 
                   variableInputWidth="50%">
               </voice-channel-input>
               <br><br><br>
               <span class="dbminputlabel">Wybierz stację radiową</span><br>
               <select id="station" class="round" style="width: 90%">
       <option value="1">RMF 2</option>
       <option value="2">RMF 3</option>
       <option value="3">RMF 4</option>
       <option value="4">RMF 5</option>
       <option value="5">RMF 50s</option>
       <option value="6">RMF 60s</option>
       <option value="7">RMF 70s</option>
       <option value="8">RMF 80s</option>
       <option value="9">RMF 90s</option>
       <option value="10">RMF 2000</option>
       <option value="11">RMF alternatywa</option>
       <option value="12">RMF baby</option>
       <option value="13">RMF beatlemania</option>
       <option value="14">RMF blues</option>
       <option value="15">RMF bravo</option>
       <option value="16">RMF celtic</option>
       <option value="17">RMF chillout</option>
       <option value="18">RMF classic rock</option>
       <option value="19">RMF classic</option>
       <option value="20">RMF club</option>
       <option value="21">RMF dance</option>
       <option value="22">RMF depeche mode</option>
       <option value="23">RMF filmowa</option>
       <option value="24">RMF FM</option>
       <option value="25">RMF hiphop</option>
       <option value="26">RMF hopbec</option>
       <option value="27">RMF hotnew</option>
       <option value="28">RMF love</option>
       <option value="29">RMF maxxx</option>
       <option value="30">RMF party</option>
       <option value="31">RMF polski rock</option>
       <option value="32">RMF polskie przeboje</option>
       <option value="33">RMF poplista</option>
       <option value="34">RMF sloneczne przeboje</option>
               </select>
           </div>`;
       },
       
       init() {},
       
       async action(cache) {
           const { interaction } = cache;
           const data = cache.actions[cache.index];
           const Audio = this.getDBM().Audio;
           const { MessageEmbed } = require('discord.js');
           
           const channel = await this.getVoiceChannelFromData(data.channel, data.varName, cache);
           if (!interaction.member.voice.channel) {
               return interaction.reply("Błąd: Musisz być na kanale głosowym, aby użyć tej komendy!");
           }
           
           const stationValue = parseInt(data.station);
           let url, radio, img, strona;
           
           switch(stationValue) {

            case 1:
                url = 'http://195.150.20.244:8000/rmf_2'
                radio = 'RMF 2'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,94'
                break;
           case 2:
                url = 'http://195.150.20.246:8000/rmf_3'
                radio = 'RMF 3'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,95'
                break;
           case 3:
                url = 'http://195.150.20.244:8000/rmf_4'
                radio = 'RMF 4'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,96'
                break;
           case 4:
                url = 'http://195.150.20.243:8000/rmf_5'
                radio = 'RMF 5'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,97'
                break;
           case 5:
                url = 'http://195.150.20.243:8000/rmf_50s'
                radio = 'RMF 50s'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,48'
                break;
           case 6:
                url = 'http://217.74.72.11:8000/rmf_60s'
                radio = 'RMF 60s'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,44'
                break;
           case 7:
                url = 'http://217.74.72.10:8000/rmf_70s'
                radio = 'RMF 70s'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,45'
                break;
           case 8:
                url = 'http://217.74.72.12:8000/rmf_80s'
                radio = 'RMF 80s'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,25'
                break;
           case 9:
                url = 'http://217.74.72.11:8000/rmf_90s'
                radio = 'RMF 90s'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,46'
                break;
           case 10:
                url = 'http://217.74.72.12:8000/rmf_2000'
                radio = 'RMF 2000'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,81'
                break;
           case 11:
                url = 'http://217.74.72.10:8000/rmf_alternatywa'
                radio = 'RMF alternatywa'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,28'
                break;
           case 12:
                url = 'http://217.74.72.11:8000/rmf_baby'
                radio = 'RMF baby'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,43'
                break;
           case 13:
                url = 'http://217.74.72.12:8000/rmf_beatlemania'
                radio = 'RMF beatlemania'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,77'
                break;
           case 14:
                url = 'http://195.150.20.4:8000/rmf_blues'
                radio = 'RMF blues'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,39'
                break;
           case 15:
                url = 'http://31.192.216.4:8000/rmf_bravo'
                radio = 'RMF bravo'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,12'
                break;
           case 16:
                url = 'http://217.74.72.12:8000/rmf_celtic'
                radio = 'RMF celtic'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,67'
                break;
           case 17:
                url = 'http://217.74.72.10:8000/rmf_chillout'
                radio = 'RMF chillout'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,11'
                break;
           case 18:
                url = 'http://195.150.20.246:8000/rmf_classic_rock'
                radio = 'RMF classic rock'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,2'
                break;
           case 19:
                url = 'http://217.74.72.12:8000/rmf_classic'
                radio = 'RMF classic'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,7'
                break;
           case 20:
                url = 'http://217.74.72.11:8000/rmf_club'
                radio = 'RMF club'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,29'
                break;
           case 21:
                url = 'http://217.74.72.11:8000/rmf_dance'
                radio = 'RMF dance'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,3'
                break;
           case 22:
                url = 'http://195.150.20.243:8000/rmf_depeche_mode'
                radio = 'RMF depeche mode'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,31'
                break;
           case 23:
                url = 'http://195.150.20.246:8000/rmf_muzyka_filmowa'
                radio = 'RMF filmowa'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,33'
                break;
           case 24:
                url = 'http://217.74.72.12:8000/rmf_fm'
                radio = 'RMF FM'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,5'
                break;
           case 25:
                url = 'http://217.74.72.11:8000/rmf_hip_hop'
                radio = 'RMF hiphop'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,37#p'
                break;
           case 26:
                url = 'http://217.74.72.11:8000/rmf_hop_bec'
                radio = 'RMF hopbec'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,22'
                break;
           case 27:
                url = 'http://195.150.20.4:8000/rmf_hot_new'
                radio = 'RMF hotnew'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,27'
                break;
           case 28:
                url = 'http://31.192.216.4:8000/rmf_love'
                radio = 'RMF love'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,14'
                break;
           case 29:
                url = 'http://31.192.216.4:8000/rmf_maxxx'
                radio = 'RMF maxxx'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,6'
                break;
           case 30:
                url = 'http://217.74.72.12:8000/rmf_party'
                radio = 'RMF party'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,23'
                break;
           case 31:
                url = 'http://217.74.72.10:8000/rmf_polski_rock'
                radio = 'RMF polski rock'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,36'
                break;
           case 32:
                url = 'http://217.74.72.12:8000/rmf_polskie_przeboje'
                radio = 'RMF polskie przeboje'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,9'
                break;
           case 33:
                url = 'http://31.192.216.4:8000/rmf_poplista'
                radio = 'RMF poplista'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,8'
                break;
           case 34:
                url = 'http://31.192.216.4:8000/rmf_sloneczne_przeboje'
                radio = 'RMF sloneczne przeboje'
                img = 'https://i.imgur.com/LqyrhDv.png'
                strona = 'https://www.rmfon.pl/play,10'
                break;
           }
           
           let info = { title: "Brak danych", description: "Brak danych" };
        try {
            const apiUrl = `https://api.wiedzminpolska.xyz/radioinfo?url=${encodeURIComponent(url)}`;
            const res = await fetch(apiUrl);
            if (res.ok) {
                info = await res.json();
            }
        } catch (err) {
            console.log("⚠️ Nie udało się pobrać info o radiu:", err.message);
        }

        await Audio.connectToVoice(channel);
        const audioInfo = ["url", { seek: '0', volume: 1, bitrate: '1000' }, url];
        Audio.addAudio(audioInfo, cache.server);

        const embed = new MessageEmbed()
            .setTitle('Radio')
            .setColor('RANDOM')
            .setDescription(`Słuchasz aktualnie stacji [${radio}](${strona})`)
            .addFields(
                { name: "▶️ Utwór", value: info.title?.trim() || "Brak danych", inline: false },
              )
            .setThumbnail(img);

        if (cache.interaction?.reply) {
            cache.interaction.reply({ embeds: [embed] }).catch(console.error);
        } else if (cache.msg) {
            cache.msg.channel.send({ embeds: [embed] });
        }

        this.storeValue(radio, 1, 'radio', cache);
        this.storeValue(strona, 1, 'strona', cache);
        this.storeValue(url, 1, 'url', cache);
        this.storeValue(img, 1, 'img', cache);
        this.callNextAction(cache);
    },

    mod() {}
};
