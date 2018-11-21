const Discord = require('discord.js');
const Streaming = new Discord.Client();
Streaming.on('ready', () => {
  console.log(`Logged in as ${Streaming.user.tag}!`);
Streaming.user.setGame(`#KING#`,"http://twitch.tv/S-F")
Streaming.user.setStatus("dnd")
});


Streaming.login(process.env.BOT_T);
