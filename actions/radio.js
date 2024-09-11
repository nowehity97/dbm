module.exports = {

       name: "Radio",
       section: "Audio Control",
       requiresAudioLibraries: true,
       variableStorage(data, varType) {
              if (1 !== varType) return;
              return ["radio", "Nazwa Stacji", "strona", "Strona Stacji", "url", "Link do radia", "img", "Zdjęcie stacji"];
       },

        meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka, Hit Stary', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js' },
        fields: ["channel", "varName", "source", "rmf", "type", "eska", "type2", "openfm", "type3", "xdopenfm", "type4"],
        //---------------------------------------------------------------------
        // Command HTML
        //
        // This function returns a string containing the HTML used for
        // editing actions.
        //
        // The "isEvent" parameter will be true if this action is being used
        // for an event. Due to their nature, events lack certain information,
        // so edit the HTML to reflect this.
        //---------------------------------------------------------------------
        subtitle(data, presets) {
             const r1 = data.source
             const r2 = r1.replace('1', 'RMF')
             const r3 = r2.replace('2', 'ESKA')
             const radio = r3.replace('3', 'Stacje Inne')
           return `Posłuchaj radia ${radio}`;
         },
        html(isEvent, data) {
          return `
          <div>
          <p>
              <u>Mod Info:</u><br>
              Created by money#6283
          </p>
      </div><br>
      <div>
      <voice-channel-input dropdownLabel="Voice Channel" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName" selectWidth="45%" variableInputWidth="50%"></voice-channel-input>
          
          <br><br><br>
      
          <span class="dbminputlabel">Radio</span><br>
            <select id="source" class="round" style="width: 45%" onchange="glob.onChange1(this)">
                    <option value="1">RMF</option>
                    <option value="2">ESKA</opion>
                    <option value="3">Stacje Inne</option>
            </select>
    
          <br>
          <span id="rmf" style="display: none" class="dbminputlabel">Stacja RMF</span><br>
          <select id="type" class="round" style="display: none">
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
          <span id="eska" class="dbminputlabel">Stacja ESKA</span><br>
          <select id="type2" class="round" style="display: none">
          <option value="35">Eska Grudziadz</option>
          <option value="36">Vox Fm</option>
          <option value="37">Eska Warszawa</option>
          <option value="38">Eska Rock</option>
          <option value="39">Eska Malopolska Zakopane</option>
          <option value="40">Eska Wroclaw</option>
          <option value="41">Eska Poznan</option>
          <option value="42">Eska Impreska</option>
          <option value="43">Eska Rzeszow</option>
          <option value="44">Eska Kraków</option>
          <option value="45">Eska Goraca 20</option>
          <option value="46">Radio Plus</option>
          <option value="47">Radio Plus Krakow</option>
          <option value="48">Eska Białystok</option>
          <option value="49">Eska Trojmiasto</option>
          <option value="50">Eska Slask</option>
          <option value="51">Eska Do Pracy</option>
          <option value="52">Eska Rock Polska</option>
          <option value="53">Eska Lodz</option>
          <option value="54">Disco Polo Top40</option>
          <option value="55">Supernova Warszawa</option>
          <option value="56">Eska Szczecin</option>
          <option value="57">Eska Bydgoszcz</option>
          <option value="58">Radio Plus Lublin</option>
          <option value="59">Vox Impreza W Rytmie Hitow</option>
          <option value="60">Vox 90</option>
          <option value="61">Eska Opole</option>
          <option value="62">Vox Bestlista</option>
          <option value="63">Eska Torun</option>
          <option value="64">Eska Lublin</option>
          <option value="65">Eska Olsztyn</option>
          <option value="66">Top Disco Polo</option>
          <option value="67">Eska Kalisz Ostrow</option>
          <option value="68">Eska Tarnow</option>
          <option value="69">Eska Gorzow</option>
          <option value="70">Eska Zamosc</option>
          <option value="71">Eska Radom</option>
          <option value="72">Eska Koszalin</option>
          <option value="73">Eska Pila</option>
          <option value="74">Eska Elblag</option>
          <option value="75">Eska Beskidy</option>
          <option value="76">Radio Plus Koszalin</option>
          <option value="77">Eska Belchatow</option>
          <option value="78">Radio Plus Lodz</option>
          <option value="79">Eska Zielona Gora</option>
          <option value="80">Eska Siedlce</option>
          <option value="81">Eska Kielce</option>
          <option value="82">Eska Starachowice</option>
          <option value="83">Eska Leszno</option>
          <option value="84">Eska Plock</option>
          <option value="85">Radio Plus Szczecin</option>
          <option value="86">Eska Przemysl</option>
          <option value="87">Eska Zary</option>
          <option value="88">Eska Ilawa</option>
          <option value="89">Radio Plus Olsztyn</option>
          <option value="90">Eska Ostrzeszow</option>
          <option value="91">Disco Party</option>
          <option value="92">Eska Szczecinek</option>
          <option value="93">Radio Plus Podhale</option>
          <option value="94">Eska Lomza</option>
          <option value="95">New Pop</option>
          <option value="96">Disco Polo Top</option>
          <option value="97">Eska Krasnik</option>
          <option value="98">Vox Fm Poznan</option>
          <option value="99">Gwiazdy Dance</option>
          <option value="100">Rock Relaks</option>
          <option value="101">New Dance</option>
          <option value="102">Eska Rap 20</option>
          <option value="103">Pop Top 40</option>
          <option value="104">Rock Do Pracy</option>
          <option value="105">Eska Braniewo</option>
          <option value="106">Dance Top 40</option>
          <option value="107">Muzyka Do Pracy</option>
          <option value="108">Special Set</option>
          <option value="109">Milosc W Rytmie Rock</option>
          <option value="110">Supernova Rzeszow</option>
          <option value="111">Supernova Gdansk</option>
          <option value="112">Supernova Opole</option>
          <option value="113">Vox Fm Radom</option>
          <option value="114">Radio Go</option>
          <option value="115">Vox Fm Gorzow</option>
          <option value="116">Supernova Krakow</option>
          <option value="117">Supernova Lodz</option>
          <option value="118">Z Wami Fm</option>
          <option value="119">Supernova Wroclaw</option>
          <option value="120">Supernova Torun</option>
          <option value="121">Supernova Trzebnica</option>
          <option value="122">Supernova Konin</option>
    
          </select>
          <span id="openfm" class="dbminputlabel">Stacje Inne</span><br>
          <select id="type3" class="round" style="display: none">
          <option value="123">Radio Zlote Przeboje</option>
          <option value="124">Radio Plus waw</option>
          <option value="125">Radio ZET</option>
          <option value="126">Radio Nowy Świat</option>
          <option value="127">RadioParty.pl</option>
          <option value="128">Radio Park</option>
          <option value="129">Radio Fest</option>
          <option value="130">Radio Muzo FM</option>
          <option value="131">Radio Piekary</option>
          <option value="132">Radio WNET</option>
          <option value="133">Radio FTB Disco Polo</option>
          <option value="134">DiscoParty.pl - Disco Polo</option>
          <option value="135">Radio Club Party</option>
          <option value="136">Freee 89.9 FM</option>
          </select>
           </div>`;
             },
      
        //---------------------------------------------------------------------
        // Action Editor Init Code
        //
        // When the HTML is first applied to the action editor, this code
        // is also run. This helps add modifications or setup reactionary
        // functions for the DOM elements.
        //---------------------------------------------------------------------
        init() {
            const { document, glob } = this;
            glob.onChange1 = function onChange1(event) {
            const value = parseInt(event.value, 10);
            const eska = document.getElementById('type2');
            const rmf = document.getElementById('type')
            const rmf1 = document.getElementById('rmf')
            const eska1 = document.getElementById('eska')
            const openfm1 = document.getElementById('openfm')
            const openfm = document.getElementById('type3')
        
            if (value === 1) {
                rmf.style.display = null
                rmf.style.width = '45%'
                rmf1.style.display = null
                eska.style.display = 'none'
                eska1.style.display = 'none'
                openfm1.style.display = 'none'
                openfm.style.display = 'none'
            } else if (value === 2) {
                eska.style.display = null
                eska.style.width = '45%'
                eska1.style.display = null
                rmf1.style.display = 'none'
                rmf.style.display = 'none'
                openfm1.style.display = 'none'
                openfm.style.display = 'none'
            } else if (value === 3) {
                eska.style.display = 'none'
                eska1.style.display = 'none'
                openfm.style.width = '45%'
                rmf1.style.display = 'none'
                rmf.style.display = 'none'
                openfm1.style.display = null
                openfm.style.display = null
   
            }
            };
            glob.onChange1(document.getElementById('source'));
        },
    
      
        //---------------------------------------------------------------------
        // Action Bot Function
        //
        // This is the function for the action within the Bot's Action class.
        // Keep in mind event calls won't have access to the "msg" parameter,
        // so be sure to provide checks for variable existence.
        //---------------------------------------------------------------------
      
        async action(cache) {
            const { interaction } = cache
            const data = cache.actions[cache.index];
            const Audio = this.getDBM().Audio;
            const { MessageEmbed } = require('discord.js')
            const channel = await this.getVoiceChannelFromData(data.channel, data.varName, cache);
            if (!interaction.member.voice.channel) return interaction.reply("Błąd: Musisz być na kanale by użyć tej komendy!")
            let url
            const check = data.source
            const type = parseInt(data.type)
            const type2 = parseInt(data.type2)
            const type3 = parseInt(data.type3)
            if (check === '1') { 
                switch(type) {
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
                       default:
           break;
            }
        }
        if (check === '2') {
            switch(type2) {
             case 35:
                  url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-grudziadz'
                  radio = 'Eska Grudziadz'
                  img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                  strona = 'https://www.eska.pl/grudziadz/'
                      break;
              case 36:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm'
                   radio = 'Vox Fm'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/'
                      break;
              case 37:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-warszawa'
                      radio = 'Eska Warszawa'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/warszawa/'
                      break;
              case 38:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock'
                      radio = 'Eska Rock'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1398.v16.png'
                      strona = 'https://www.eskarock.pl/'
                      break;
              case 39:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-malopolska-zakopane'
                      radio = 'Eska Malopolska Zakopane'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.radio.pl/s/eskamalopolska'
                      break;
              case 40:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-wroclaw'
                      radio = 'Eska Wroclaw'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/wroclaw/'
                      break;
              case 41:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-poznan'
                      radio = 'Eska Poznan'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/poznan/'
                      break;
               case 42:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-impreska'
                      radio = 'Eska Impreska'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tag/impreska,tg-mLBP-HmQv-oX7G/'
                      break;
               case 43:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rzeszow'
                      radio = 'Eska Rzeszow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/rzeszow/'
                      break;
              case 44:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krakow'
                      radio = 'Eska Kraków'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/krakow/'
                      break;
              case 45:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-goraca-20'
                      radio = 'Eska Goraca 20'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/goraca20/'
                      break;
               
              case 46:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus'
                      radio = 'Radio Plus'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/'
                      break;
               case 47:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-krakow'
                      radio = 'Radio Plus Krakow'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/'
                      break;
              case 48:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bialystok'
                      radio = 'Eska Białystok'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/bialystok/'
                      break;
              case 49:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-trojmiasto'
                      radio = 'Eska Trojmiasto'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/trojmiasto/'
                      break;
               
            case 50:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-slask'
                      radio = 'Eska Slask'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/slaskie/'
                      break;
               case 51:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-do-pracy'
                      radio = 'Eska Do Pracy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://onlineradiobox.com/pl/eskadopracy/'
                      break;
              case 52:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock-polska'
                      radio = 'Eska Rock Polska'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eskarock.pl/'
                      break;
              case 53:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lodz'
                      radio = 'Eska Lodz'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/lodz/'
                      break;
               
              case 54:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top40'
                      radio = 'Disco Polo Top40'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.radio.pl/s/discopolotop40'
                      break;
               case 55:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-warszawa'
                      radio = 'Supernova Warszawa'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
              case 56:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecin'
                      radio = 'Eska Szczecin'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/szczecin/'
                      break;
              case 57:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bydgoszcz'
                      radio = 'Eska Bydgoszcz'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/bydgoszcz/'
                      break;
               
              case 58:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lublin'
                      radio = 'Radio Plus Lublin'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/'
                      break;
               case 59:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-impreza-w-rytmie-hitow'
                      radio = 'Vox Impreza W Rytmie Hitow'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/'
                      break;
              case 60:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-90'
                      radio = 'Vox 90'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/'
                      break;
              case 61:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-opole'
                      radio = 'Eska Opole'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/opole/'
                      break;
              case 62:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-bestlista'
                      radio = 'Vox Bestlista'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/bestlista/'
                      break;
               case 63:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-torun'
                      radio = 'Eska Torun'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/torun/'
                      break;
              case 64:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lublin'
                      radio = 'Eska Lublin'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/lublin/'
                      break;
              case 65:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-olsztyn'
                      radio = 'Eska Olsztyn'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/olsztyn/'
                      break;
               case 66:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/top-disco-polo'
                      radio = 'Top Disco Polo'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tag/hity-disco-polo,tg-QHc2-djkL-78Nh/'
                      break;     
              case 67:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kalisz-ostrow'
                      radio = 'Eska Kalisz Ostrow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/ostrow/'
                      break;
              case 68:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-tarnow'
                      radio = 'Eska Tarnow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tarnow/'
                      break;
              case 69:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-gorzow'
                      radio = 'Eska Gorzow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/gorzow/'
                      break;
              case 70:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zamosc'
                      radio = 'Eska Zamosc'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/zamosc/'
                      break;
              case 71:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-radom'
                      radio = 'Eska Radom'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/radom/'
                      break;   
              case 72:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-koszalin'
                      radio = 'Eska Koszalin'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/koszalin/'
                      break;
              case 73:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-pila'
                      radio = 'Eska Pila'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/pila/'
                      break;
              case 74:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-elblag'
                      radio = 'Eska Elblag'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/elblag/'
                      break;
               case 75:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-beskidy'
                      radio = 'Eska Beskidy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/beskidy/'
                      break;
               case 76:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-koszalin'
                      radio = 'Radio Plus Koszalin'
                      img = "https://cdn.onlineradiobox.com/img/l/1/1361.v10.png"
                      strona = 'https://www.radioplus.pl/koszalin/'
                      break;
               case 77:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-belchatow'
                      radio = 'Eska Belchatow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/belchatow/'
                      break;
               case 78:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lodz'
                      radio = 'Radio Plus Lodz'
                      img = "https://cdn.onlineradiobox.com/img/l/1/1361.v10.png"
                      strona = 'https://www.radioplus.pl/'
                      break;
               case 79:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zielona-gora'
                      radio = 'Eska Zielona Gora'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/zielona-gora/'
                      break;
               case 80:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-siedlce'
                      radio = 'Eska Siedlce'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/siedlce/'
                      break;
               case 81:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kielce'
                      radio = 'Eska Kielce'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/kielce/'
                      break;
               case 82:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-starachowice'
                      radio = 'Eska Starachowice'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/starachowice/'
                      break;
               case 83:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-leszno'
                      radio = 'Eska Leszno'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/leszno/'
                      break;
               case 84:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-plock'
                      radio = 'Eska Plock'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/plock/'
                      break;
               case 85:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-szczecin'
                      radio = 'Radio Plus Szczecin'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/szczecin/'
                      break;
               case 86:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-przemysl'
                      radio = 'Eska Przemysl'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/przemysl/'
                      break;
               case 87:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zary'
                      radio = 'Eska Zary'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/zary/'
                      break;
               case 88:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ilawa'
                      radio = 'Eska Ilawa'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/ilawa'
                      break;
               case 89:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-olsztyn'
                      radio = 'Radio Plus Olsztyn'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/olsztyn/'
                      break;
               case 90:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ostrzeszow'
                      radio = 'Eska Ostrzeszow'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/ostrzeszow/'
                      break;
               case 91:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-party'
                      radio = 'Disco Party'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://discoparty.pl/'
                      break;
               case 92:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecinek'
                      radio = 'Eska Szczecinek'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/szczecinek/'
                      break;
               case 93:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-podhale'
                      radio = 'Radio Plus Podhale'
                      img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                      strona = 'https://www.radioplus.pl/podhale/'
                      break;
               case 94:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lomza'
                      radio = 'Eska lomza'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/lomza/'
                      break;
               case 95:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-pop'
                      radio = 'New Pop'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/hity/'
                      break;
               case 96:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top'
                      radio = 'Disco Polo Top'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/tag/hity-disco-polo,tg-QHc2-djkL-78Nh/'
                      break;
               case 97:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krasnik'
                      radio = 'Eska Krasnik'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/krasnik/'
                      break;
              case 98:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-poznan'
                      radio = 'Vox Fm Poznan'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/poznan/'
                      break;
               case 99:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/gwiazdy-dance'
                      radio = 'Gwiazdy Dance'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 100:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-relaks'
                      radio = 'Rock Relaks'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 101:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-dance'
                      radio = 'New Dance'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 102:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rap-20'
                      radio = 'Eska Rap 20'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 103:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/pop-top-40'
                      radio = 'Pop Top 40'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 104:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-do-pracy'
                      radio = 'Rock Do Pracy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 105:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-braniewo'
                      radio = 'Eska Braniewo'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/braniewo/'
                      break;
               case 106:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/dance-top-40'
                      radio = 'Dance Top 40'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 107:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/muzyka-do-pracy'
                      radio = 'Muzyka Do Pracy'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 108:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/special-set'
                      radio = 'Special Set'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 109:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/milosc-w-rytmie-rock'
                      radio = 'Milosc W Rytmie Rock'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.eska.pl/'
                      break;
               case 110:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-rzeszow'
                      radio = 'Supernova Rzeszow'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
               case 111:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-gdansk'
                      radio = 'Supernova Gdansk'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = ''
                      break;
               case 112:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-opole'
                      radio = 'Supernova Opole'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
               case 113:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-radom'
                      radio = 'Vox Fm Radom'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/radom-grojec/'
                      break;
               case 114:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-go'
                      radio = 'Radio Go'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.eska.pl'
                      break;
               case 115:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-gorzow'
                      radio = 'Vox Fm Gorzow'
                      img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                      strona = 'https://www.voxfm.pl/gorzow-wlkp/'
                      break;
               case 116:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-krakow'
                      radio = 'Supernova Krakow'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/krakow/'
                      break;
               case 117:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-lodz'
                      radio = 'Supernova Lodz'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/lodz/'
                      break;
               case 118:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/z-wami-fm'
                      radio = 'Z Wami Fm'
                      img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                      strona = 'https://www.radiosupernova.pl/'
                      break;
               case 119:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-wroclaw'
                      radio = 'Supernova Wroclaw'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/wroclaw/'
                      break;
               case 120:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-torun'
                      radio = 'Supernova Torun'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/torun/'
                      break;
               case 121:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-trzebnica'
                      radio = 'Supernova Trzebnica'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/trzebnica/'
                      break;
                case 122:
                      url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-konin'
                      radio = 'Supernova Konin'
                      img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                      strona = 'https://www.radiosupernova.pl/konin/'
                      break;
                      default:
                        break;
            }
        }        
        if (check === '3') {
            switch(type3) {
             
             
         case 123:
                  url = 'https://radiostream.pl/tuba9-1.mp3'
                  radio = 'Radio Zlote Przeboje'
                  img = 'https://cdn.onlineradiobox.com/img/l/0/1300.v7.png'
                  strona = 'https://zloteprzeboje.pl/'
                  break;
         case 124:
                  url = 'https://pl01.cdn.eurozet.pl/plu-waw.mp3'
                  radio = 'Radio Plus'
                  img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v11.png'
                  strona = 'https://www.radioplus.pl/'
                  break;
         case 125:
                  url = 'http://zet-net-01.cdn.eurozet.pl:8400/'
                  radio = 'Radio ZET'
                  img = 'https://gfx.radiozet.pl/extension/radiozet/design/standard/images/favicon/apple-touch-icon.png'
                  strona = 'https://www.radiozet.pl/'
                  break;
         case 126:
                  url = 'https://n20a-eu.rcs.revma.com/ypqt40u0x1zuv?rj-ttl=5&rj-tok=AAABkXE1aPwAILj8Y_bK1e53SQ'
                  radio = 'Radio Nowy Świat'
                  img = 'https://cdn.onlineradiobox.com/img/l/5/90915.v6.png'
                  strona = 'https://nowyswiat.online/'
                  break;
         case 127:
                  url = 'https://s2.radioparty.pl:8015/stream'
                  radio = 'RadioParty.pl'
                  img = 'https://cdn.onlineradiobox.com/img/l/7/1797.v6.png'
                  strona = 'https://radioparty.pl/'
                  break;
         case 128:
                  url = 'https://sluchaj2.radiopark.biz.pl:8443/stream'
                  radio = 'Radio Park'
                  img = 'https://cdn.onlineradiobox.com/img/l/7/1367.v3.png'
                  strona = 'https://radiopark.fm/'
                  break;
         case 129:
                  url = 'https://play.radiofest.pl:8443/fest'
                  radio = 'Radio Fest'
                  img = 'https://cdn.onlineradiobox.com/img/l/4/1424.v6.png'
                  strona = 'http://www.radiofest.pl/'
                  break;
         case 130:
                  url = 'https://n15a-eu.rcs.revma.com/1nnezw8qz7zuv?rj-ttl=5&rj-tok=AAABkXE9lv0Ao6LiYp2d94GGZA'
                  radio = 'Radio Muzo FM'
                  img = 'https://cdn.onlineradiobox.com/img/l/8/1788.v3.png'
                  strona = 'https://radiofm-online.com/muzo-fm'
                  break;
         case 131:
                  url = 'https://stream.radiopiekary.pl/'
                  radio = 'Radio Piekary'
                  img = 'https://cdn.onlineradiobox.com/img/l/1/1421.v6.png'
                  strona = 'https://radiopiekary.pl/'
                  break;
         case 132:
                  url = 'https://media.wnet.fm/wnet.fm'
                  radio = 'Radio WNET'
                  img = 'https://cdn.onlineradiobox.com/img/l/8/83328.v1.png'
                  strona = 'https://wnet.fm/'
                  break;
         case 133:
                  url = 'http://play.radioftb.net:8022/;'
                  radio = 'Radio FTB Disco Polo'
                  img = 'https://cdn.onlineradiobox.com/img/l/8/33848.v12.png'
                  strona = 'https://radioftb.net/disco-polo/'
                  break;
         case 134:
                  url = 'https://s1.slotex.pl:7432/stream/1/?sid=1'
                  radio = 'DiscoParty.pl - Disco Polo'
                  img = 'https://cdn.onlineradiobox.com/img/l/2/81432.v7.png'
                  strona = 'https://discoparty.pl/'
                  break;
         case 135:
                  url = 'http://4stream.pl:18278/;stream.mp3'
                  radio = 'Radio Club Party'
                  img = 'https://cdn.onlineradiobox.com/img/l/4/1564.v9.png'
                  strona = 'https://myradioonline.pl/radio-party'
                  break;
         case 136:
                  url = 'https://streaming.radio.lublin.pl:8843/radiofreee'
                  radio = 'Freee 89.9 FM'
                  img = 'https://cdn.onlineradiobox.com/img/l/7/1397.v2.png'
                  strona = 'https://radiofreee.pl/'
                  break;
         
   }
           
             }        
       
             Audio.connectToVoice(channel);
             const options = {};
             options.seek = '0'
             options.volume = parseInt('100') / 100
             options.bitrate = '1000'
               const info = ["url", options, url];
               if (interaction) Audio.addAudio(info, interaction.guild, false);
               
               const embed = new MessageEmbed()
                  .setTitle('Radio')
                  .setColor('RANDOM')
                  .setDescription(`Słuchasz aktualnie stacji [${radio}](${strona})`)
                  .setThumbnail(img)
                  if (interaction) interaction.reply({ embeds: [embed] }) 
          
                     this.storeValue(radio, 1, 'radio', cache)
                     this.storeValue(strona, 1, 'strona', cache)
                     this.storeValue(url, 1, 'url', cache)
                     this.storeValue(img, 1, 'img', cache)
              this.callNextAction(cache);
              },
          
            mod() {}, 
        
          };
