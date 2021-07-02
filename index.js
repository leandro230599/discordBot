const Discord = require('discord.js');
const client = new Discord.Client();

// Al conectarse
client.on('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}!`);
});

// Mensajes
client.on('message', msg => {

    var esbot = "Bot Leo" == msg.author.username;

    // Da los buenos dias
    if (msg.content.toLowerCase().includes('buen dia') || msg.content.toLowerCase().includes('buenos dia')) {
        if (!esbot) {
            msg.channel.send(`Buenos dias ${msg.author}! ¿Como amaneciste hoy?`);
        }
    } else

    // Da las buenas noche
    if (msg.content.toLowerCase().includes('buenas noche')) {
        if (!esbot) {
            msg.channel.send(`Buenas noches ${msg.author}, descansa bien!`);
        }
    } else

    // Saluda
    if (msg.content.toLowerCase().includes('hola')) {
        if (!esbot) {
            msg.channel.send(`Hola ${msg.author}, ¿Como estas?`);
        }
    } else

    // Pregunta como estas
    if ((msg.content.toLowerCase().includes('como esta'))) {
        if ((msg.content.toLowerCase().includes('<@!834261588961263687>'))) {
            if (!esbot) {
                msg.channel.send(`Bien y vos ${msg.author}? Gracias por preguntar!`);
            }
        }
    } else

    // Bardea al MEE6
    if (msg.author.username === "MEE6") {
        msg.reply("callate bot inutil, no servis vos!");
    } else

    // Lo etiquetaste -- (msg.content.toLowerCase().includes('<@!834261588961263687>')
    if ((msg.mentions.has(client.user)) && (!msg.content.toLowerCase().includes('como esta'))) {
        let insultos = ["Que me etiquetas? chupa pija de mierda",
            "Otra vez molestandome traga leche de mierda",
            "Estas alpedo no? siempre hinchando las pelotas, hace otra cosa",
            "La poronga en el orto te voy a meter si seguis hinchando",
            "Hacete coger",
            "La concha nigeriana de tu madre",
            "Chupame el chori enano que tengo",
            "Che perdon pero tengo cosas mejores con las que perder el tiempo que con vos, inutil de mierda",
            "Dios... tus padres son hermanos?",
            "Eres tonto como una piedra y fe@ como una blasfemia, si un extraño te ofrece llevarte, te subes!",
            "Maldita sea, otra vez este mono de mierda molestando",
            "Tu mama me limpia la ricota del chori a pura lengua",
            "Si el aborto hubiera sido legal hace 20 años, hoy no estarias hinchando aca",
            "Cerra el orto",
            "Boliviano"
        ];
        console.log(insultos.length);
        msg.reply(insultos[Math.floor(Math.random() * 13)]);
    }

});

client.login('ODM0MjYxNTg4OTYxMjYzNjg3.YH-Upg.IJRfs0lbzemzG5neT-GkhwthhZQ');