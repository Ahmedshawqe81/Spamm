const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();




client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '$daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '$credit'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '$rep'){
        message.channel.send('#rep <@521763526436585472>')
    }
});

client2.on('message', message => {
    if(message.content === '$daily'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '$credit'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '$rep'){
        message.channel.send('#rep <@521763526436585472>')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client3.on('message', message => {
    if(message.content === '$rep'){
        message.channel.send('#rep <@521763526436585472>')
    }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client4.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
















client3.on('message', message => {
    if(message.content === '$credit'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === '$credit'){
        message.channel.send('#credits')
    }
});











client4.on('message', message => {
    if(message.content === '$daily'){
        message.channel.send('#daily')
    }
});


client3.on('message', message => {
    if(message.content === '$daily'){
        message.channel.send('#daily')
    }
});

client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// 
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
