module.exports = {
    name: 'Store Member Data List',
    section: 'Member Control',
    meta: {
      version: '2.1.8',
      preciseCheck: false,
      author: 'Gotowka/DBM Mods',
      authorUrl: 'https://github.com/dbm-network/mods',
      downloadURL: 'https://github.com/dbm-network/mods/blob/master/actions/member_data_list_MOD.js',
    },
  
    subtitle(data) {
      return `${[data.dataName]}`;
    },
  
    variableStorage(data, varType) {
      if (parseInt(data.storage, 10) !== varType) return;
      return [data.varName2, 'Array'];
    },
  
    fields: [
      'numbefst2',
      'numbefst',
      'numbefstselect',
      'sort',
      'start',
      'middle',
      'end',
      'getresults',
      'dataName',
      'varName2',
      'storage',
    ],
  
    html() {
      return `
  <div id="wrexdiv2" style="width: 550px; height: 350px; overflow-y: scroll;">
    <div>
      <div style="padding-top: 8px;">
        <div style="float: left; width: 50%;">
          <span class="dbminputlabel">Data Name</span>
          <input id="dataName" class="round" type="text">
        </div>
      </div>
      <div style="padding-left: 1%;">
        <span class="dbminputlabel">Number before start?</span>
        <select id="numbefstselect" class="round" style="width:33%" onchange="glob.onChange(this)">
          <option value="1" >No</option>
          <option value="2"selected>Yes</option>
        </select>
      </div>
      <br>
      
      <div id="numbefst" style=" width: 80%;">
        <span class="dbminputlabel">Char after number</span>
        <input id="numbefst2" class="round" type="text" value=")">
        <br>
      </div>
      
      <div>
        <span class="dbminputlabel">Start</span>
        <select id="start" class="round" style="width:33%">
          <option value="result" >Result</option>
          <option value="username"selected>Username</option>
          <option value="id">Mention</option>
        </select>
      </div>
      <br>
      
      <div style="display: table-cell;">
        <div>
          <span class="dbminputlabel">Middle</span>
          <input id="middle" style="width:80%"  class="round" type="text" value="-"></input>
        </div>
        <br>
  
        <div>
          <span class="dbminputlabel">End</span>
          <select id="end" class="round" style="width:100%">
            <option value="result" selected>Result</option>
            <option value="username">Username</option>
            <option value="id">Mention</option>
          </select>
        </div>
        <br>
  
      </div>
      <div>
        <select id="sort" class="round" style="width: 90%;">
          <option value="0" selected>Don't Sort</option>
          <option value="1" selected>Sort from Descending</option>
          <option value="2">Sort from Ascending</option>
        </select>
      </div>
      <br>
      
      <div style="float: left; width: 50%;">
        <span class="dbminputlabel">Results Count</span>
        <input id="getresults" class="round" type="text" placeholder="a:b a-From b-To">
      </div>
      <br><br><br>
      
      <div>
        <store-in-variable dropdownLabel="Store In" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
      </div>
    </div>
    <br>
  </div>`;
    },
  
    init() {},
  
    async action(cache) {
      const data = cache.actions[cache.index];
      const { msg, interaction } = cache;
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      const mid = ' ' + this.evalMessage(data.middle, cache) + ' ';
      const numbefst2 = this.evalMessage(data.numbefst2, cache);
      const selectionsnum = parseInt(data.numbefstselect, 10);
      const sortType = parseInt(data.sort, 10);
      const { sort } = require('fast-sort');
      let file = require('../data/players.json');
  
      if (file) {
        let list = []
        Object.keys(file).map(async userId => {
            const user = file[userId];
            const member = (msg ?? interaction).guild.members.cache.get(userId)
            if (member) {
                user.guildMember = member
                user.en = this.evalMessage(data.end, cache);
                user.st = this.evalMessage(data.start, cache);
                if (user.st === 'id') user.st = `<@` + member.user.id + `>`;
                else if (user.st === 'result') user.st = user[this.evalMessage(data.dataName)]
                else user.st = member.user[user.st]
                if (user.en === 'id') user.en = `<@` + member.user.id + `>`;
                else if (user.en === 'result') user.en = user[this.evalMessage(data.dataName)]
                else user.en = member.user[user.en]
                list.push(user)
            }
        })
  
        switch (sortType) {
            case 1:
              list = sort(list).desc((u) => parseInt(u[this.evalMessage(data.dataName)], 10));
              break;
            case 2:
              list = sort(list).asc((u) => parseInt(u[this.evalMessage(data.dataName)], 10));
              break;
            case 0:
              list = list;
              break;
            default:
              break;
        }
  
        let list2 = ""
        const res = this.evalMessage(data.getresults)
        let a = parseInt(res.split(':').at(0)) || 0
        let b = parseInt(res.split(':').at(1)) || 5
        if (a !== 0) a = a - 1
        for (let i = a; i < b; i++) {
          switch (selectionsnum) {
            case 1:
              list2 += `${list[i].st + mid + list[i].en}\n`
              break;
            case 2:
              list2 +=`${i + 1 + numbefst2} ${list[i].st}${mid}${list[i].en}\n`
              break;
          }
        }
  
        this.storeValue(list2, storage, varName2, cache);
      }
      this.callNextAction(cache);
  
    },
  
    mod() {},
};