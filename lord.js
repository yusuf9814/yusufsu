const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("GELL SERİ \n https://discord.gg/rGfCRjpXAh") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("j4j")      
      }
      }
    }
  }
})


client.on("guildCreate", devilhouse => {
  sleep(1000);
  if (
    devilhouse.id=== "589413911304863746" ||  // j4j sunucusunun idsi
    devilhouse.id === "589413911304863746"  // j4j sunucusunun idsi
  ) {
    
  } else {
    devilhouse.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("825497741337427978") // j4j sunucusunun kanal id'si


       a.send("J4j için dm  !!!")


      }, 300);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("825497741337427978") // j4j sunucusunun kanal id'si


       a.send("j4j için dm !!! ")


      }, 600);
})

client.login("ODI2Nzg0OTAzNTIwOTc2OTA2.YGRiLg.agydsWfjgDkg0ZN6DwNgFhRy7u0") // user tokeniniz

