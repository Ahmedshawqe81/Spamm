const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "533260175185018891"; // ايدي السررفر
var channel = "533735844016685098";//ايدي الروم
    setInterval(()=>{
           let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
    client.guilds.get(server).channels.get(channel).send('** Hi , Hi , Hi , Hi ,Hi ,Hi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,Hi Dreaaam ,   **[ " ${x} " ]**    محض ميضو لقمد نقققققق محمض ميضو لقمد نق محمض ميضو لقمد نق محمض ميضو القمد نق محمض ميضو لقمد نق #سيث رولنظ**')
   
})



client.on('ready', async() => {
var server = "533260175185018891"; // ايدي السررفر
var channel = "533735844016685098";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})




client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "#daily") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 
client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "#daily") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});





client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
