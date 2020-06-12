const botconfig = require ("./botconfig.json");
const tokenfile = require ("./tokenfile.json");
const Discord = require ("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("message", message => {
    if(message.content.startsWith("!!serverinfo")){
      let embed = new Discord.MessageEmbed()
      .setAuthor("Subo")
      .setColor('RANDOM')
      .setTitle("Szerver információk!")
      .addField("A discord server neve:", `${message.guild.name}`)
      .addField("A discord server tulajdonosa:", `${message.guild.owner}`)
      .addField("felhasználók száma:", `${message.guild.memberCount}`)
      .addField("Rangok:", `${message.guild.roles.size}`)
      message.channel.send(embed)
    }
    });

    bot.on("message", message => {
      if(message.content.startsWith("!!help")){
          let embed = new Discord.RichEmbed()
          .setTitle("parancsok")
          .setAuthor("Subo")
          .setColor("RANDOM")
          .addField("https://hypebot4.cms.webnode.hu/")
          .addBlankField()
  
          message.channel.send(embed);
      }
      });

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nincs jogod ehhez!");
      if(!args[0]) return message.reply("!!clear <üzenet mennyisége>");
      message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(`${args[0]} kitörölve!`).then(msg => msg.delete(5000));
      });

    bot.on('message', msg => {
      if (msg.content === 'Szereted a fejlesztőd?') {
        msg.reply('nem mert egy ge** és szarul fejleszt');
      }
    });

    bot.on('message', msg => {
      if (msg.content === 'Sziasztok') {
        msg.reply('@everyone Sziasztok');
      }
    });

    bot.on('message', msg => {
      if (msg.content === '!!help') {
        msg.reply('Ezek a parancsaim:Szereted a fejlesztőd?, Sziasztok, ping, Szereted a csokit?, !!help, Ki a fejlesztőd, Szereted a tejet?,!!start, !!Rp teszt,');
      }
    });

    bot.on('message', msg => {
      if (msg.content === 'Szereted a csokit?') {
        msg.reply('ha nincsen benne csoki akkor igen');
      }
    });

    bot.on('message', msg => {
      if (msg.content === 'Szereted a tejet?') {
        msg.reply('te hülye vagy? Robot vagyok ha iszok kigyulladok');
      }
    });

    bot.on('message', msg => {
      if (msg.content === 'leszel a pasim?') {
        msg.reply('Fiu vagyok vagy is robot');
      }
    });

    bot.on('message', msg => {
      if (msg.content === '!!Rp teszt') {
        msg.reply('HAMAROSAN');
      }
    });

    bot.on('message', msg => {
      if (msg.content === '!!start') {
        msg.reply('elkezdem');
      }
    });

    bot.on('message', msg => {
      if (msg.content === '!!start') {
        msg.reply('Sziasztok @everyone');
      }
    });

    process.setMaxListeners(0);

    bot.on('message', msg => {
      if (msg.content === 'Ki a fejlesztőd?') {
        msg.reply('Subo#0123');
      }
    });

    bot.on('ready', () => {
      console.log('A bot online!');
      bot.user.setActivity('!!help', {type: 'WATCHING'});
  });

bot.login(tokenfile.token);       
