const Discord  = require('discord.js')
const client   = new Discord.Client();
const Canvas = require('canvas');
const fetch = require('node-fetch')

Canvas.registerFont('ConcertOne-Regular.ttf', { family: 'Concert One' })

client.on('ready' , async () => {

    console.log('bot ready');

    setInterval( async () => {
        let guild = client.guilds.cache.get("901080739242733609")
        const canvas = Canvas.createCanvas(2920,1642);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://media.discordapp.net/attachments/937116977024090182/937119208934891550/Picsart_22-01-30_02-26-43-547.jpg')   
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        
        context.strokeRect(0, 0, canvas.width, canvas.height);
        

        context.font = '130px "Concert One"';


        context.fillStyle = '#fffafa';

        context.fillText(`Members : ${ guild.memberCount }`, 689 ,1029 );

        let i;
        let channels = guild.channels.cache.filter(channel => channel.type === "voice")
        channels.map(channel => {
            i =+ channel.members.size
        });

        context.fillText(`Voice : ${i}`, 517 ,1161 );

       let res = await fetch('https://api.codebazan.ir/time-date/?td=dateen')
       let data = await res.text()

        context.fillText(`Date : ${data}`, 569 , 1293 )

    
        await guild.setBanner(canvas.toBuffer())
    
}, 20000);

});

client.on("ready", () => {
    client.user.setActivity('Developed By katyusha-pixis')
      const channel = client.channels.cache.get("901097493482324088");
      if (!channel) return console.error("The channel does not exist!");
      channel.join().then(connection => {
          console.log("Successfully connected.");
      }).catch(e => {
          console.error(e);
      });
  });


client.login("OTA1MTIxNTE4NjM4NDY5MjEx.YYFeGg.n4AQ6SWmuD_KatnJJiyQpZluwFg");
