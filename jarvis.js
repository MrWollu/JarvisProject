const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!")
});

client.on("message", (message) => {
  if (message.author.id !== config.ownerID) return;
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send('Pong!');
  }
  if(command === 'hello'){
    message.reply('Good evening.');
  }
  if(command === 'asl'){
    let [age, sex, location] = args;
    message.channel.send(`Hello ${message.author.username}, I see you're a ${age} years old ${sex} from ${location}. Wanna date?` )
  }
  if(command === "kick"){
    let member = message.mention.member.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason);
  }
  
});



client.login(config.token);
