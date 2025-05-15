// 🧠 Naprawiona wersja z zabezpieczeniem cmd.name
module.exports = {
  name: 'Set Time Restriction',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: false,
    author: 'DBM Mods + fix by ChatGPT',
    authorUrl: 'https://github.com/dbm-network/mods',
    downloadURL: 'https://github.com/dbm-network/mods/blob/master/actions/set_time_restriction_MOD.js',
  },

  // ... --- POMIJAM HTML I INIT, BO SIĘ NIE ZMIENIŁY --- ...

  async action(cache) {
    const data = cache.actions[cache.index];
    const value = parseInt(this.evalMessage(data.value, cache), 10);

    if (isNaN(value)) return console.error(`${value} is not a valid number.`);

    let cmd;
    for (const command of this.getDBM().Files.data.commands) {
      if (command && JSON.stringify(command.actions) === JSON.stringify(cache.actions)) {
        cmd = command;
        break;
      }
    }

    if (!cmd || !cmd.name) {
      console.error('❌ Nie znaleziono komendy powiązanej z tym zestawem akcji (cmd.name undefined).');
      return this.executeResults(false, data, cache);
    }

    const TRData = cache.interaction ?? cache.msg;
    const timeLeft = await this.TimeRestriction(TRData, cmd, cache);

    if (!timeLeft) {
      this.executeResults(false, data, cache);
    } else {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName, cache);
      this.storeValue(timeLeft, storage, varName2, cache);
      this.executeResults(true, data, cache);
    }
  },

  async mod(DBM) {
    let Cooldown;

    DBM.Actions.LoadTimeRestriction = async function LoadTimeRestriction(cache) {
      Cooldown = await this.getVariable(3, 'DBMCooldown', cache);

      if (typeof Cooldown === 'undefined') {
        Cooldown = {};
      } else if (typeof Cooldown === 'string') {
        Cooldown = JSON.parse(Cooldown);
      }

      const commandTypes = [
        DBM.Bot.$slash,
        DBM.Bot.$user,
        DBM.Bot.$msge,
        DBM.Bot.$cmds,
        DBM.Bot.$icds,
        DBM.Bot.$regx,
        DBM.Bot.$anym,
      ];

      for (const commandType of commandTypes) {
        for (const commandName of Object.keys(commandType)) {
          const command = commandType[commandName];
          if (Cooldown[commandName] && command.actions) {
            const action = command.actions.find((a) => a.name === 'Set Time Restriction');
            if (!action || action.save === '1') {
              delete Cooldown[commandName];
            }
          }
        }
      }
    };

    DBM.Actions.TimeRestriction = async function TimeRestriction(TRData, cmd, cache) {
      const author = TRData.author ?? TRData.user;
      const { channel } = TRData;

      if (typeof Cooldown === 'undefined' || Cooldown === {}) await this.LoadTimeRestriction(cache);

      const { Files } = DBM;
      let value = parseInt(await this.evalMessage(cache.actions[cache.index].value, cache), 10);
      const measurement = parseInt(cache.actions[cache.index].measurement, 10);
      const restrict = parseInt(cache.actions[cache.index].restrict, 10);

      switch (measurement) {
        case 1: value *= 1000; break;      // seconds
        case 2: value *= 60000; break;     // minutes
        case 3: value *= 3600000; break;   // hours
        case 4: value *= 86400000; break;  // days
        default: break;
      }

      if (!Cooldown[cmd.name]) Cooldown[cmd.name] = {};
      Cooldown[cmd.name].save = parseInt(cache.actions[cache.index].save, 10);
      Cooldown[cmd.name].cooldown = value;
      const now = Date.now();

      switch (restrict) {
        case 0: {
          if (typeof Cooldown[cmd.name][author.id] !== 'number') {
            delete Cooldown[cmd.name][author.id];
          }
          if (Cooldown[cmd.name][author.id]) {
            const expirationTime = Cooldown[cmd.name][author.id] + Cooldown[cmd.name].cooldown;
            if (now < expirationTime) {
              return Math.ceil((expirationTime - now) / 1000);
            }
            Cooldown[cmd.name][author.id] = now;
            if (Cooldown[cmd.name].save === 0) Files.saveGlobalVariable('DBMCooldown', JSON.stringify(Cooldown));
            return false;
          }
          Cooldown[cmd.name][author.id] = now;
          if (Cooldown[cmd.name].save === 0) Files.saveGlobalVariable('DBMCooldown', JSON.stringify(Cooldown));
          return false;
        }
        case 1: {
          let channelId;
          if (typeof cache.server !== 'undefined') {
            channelId = cache.server.id;
          } else {
            channelId = channel.id;
          }
          if (typeof Cooldown[cmd.name][author.id] !== 'object') {
            Cooldown[cmd.name][author.id] = {};
          }
          if (Cooldown[cmd.name][author.id][channelId]) {
            const expirationTime = Cooldown[cmd.name][author.id][channelId] + Cooldown[cmd.name].cooldown;
            if (now < expirationTime) {
              return Math.ceil((expirationTime - now) / 1000);
            }
            Cooldown[cmd.name][author.id][channelId] = now;
            if (Cooldown[cmd.name].save === 0) Files.saveGlobalVariable('DBMCooldown', JSON.stringify(Cooldown));
            return false;
          }
          Cooldown[cmd.name][author.id][channelId] = now;
          if (Cooldown[cmd.name].save === 0) Files.saveGlobalVariable('DBMCooldown', JSON.stringify(Cooldown));
          return false;
        }
        default:
          break;
      }
    };
  },
};
