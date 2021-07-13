const Discord = require('discord.js');
const client = new Discord.Client();
var contadorpreguntas = 0;
var arrPreguntas = [];
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

    // Lo etiquetaste y pediste que insulte a otro
    if ((msg.mentions.has(client.user)) && ((msg.content.toLowerCase().includes('insulta a')) || (msg.content.toLowerCase().includes('insultalo a')) || (msg.content.toLowerCase().includes('insultalo a')))) {
        let insultos = ["Put@ de mierda", "Trol@", "Mogolic@ de mierda", "Pelotud@ de mierda", " La concha puta de tu madre", "Inutil de mierda", "Maldit@ infeliz", "Deforme de mierda"];
        let cosasleo = ["Sos muy hermoso", "Vuelves locas a todas", "Fiu fiu!", "Tremendo pito tenes papu", "Te haria un buen brrr en las pelotas", " Ese aspecto morocho te hace hermoso bebe", "Te amo", "Todo lo que haces me vuelve calienta"];
        let usuarios = msg.mentions.members.array();
        let idbot = client.user.id;
        let idleo = 434139753131016192;
        for (let i in usuarios) {
            if (usuarios[i] != idbot)
                if (usuarios[i] == idleo) {
                    msg.channel.send("<@" + usuarios[i] + "> " + cosasleo[Math.floor(Math.random() * insultos.length)]);
                } else
                    msg.channel.send("<@" + usuarios[i] + "> " + insultos[Math.floor(Math.random() * insultos.length)]);
        }
    } else

    // Preguntas anonimas, funciona en canal pregunta y test-de-bot
    if (msg.mentions.has(client.user) && msg.content.toLowerCase().includes('pregunta') && (msg.channel.name.includes('test-de-bot') || msg.channel.name.includes('pregunta'))) {
        let test = msg.content.replace('pregunta', '').replace('<@!834261588961263687>', '');
        if (!esbot) {
            contadorpreguntas++;
            msg.channel.send(`${contadorpreguntas}) ${test}`);
            let aux = {
                autor: msg.author.username,
                pregunta: test
            };
            arrPreguntas.push(aux);
            msg.delete();
        }
    } else

    // Obtener, funciona en canal  test-de-bot
    if (msg.mentions.has(client.user) && msg.content.toLowerCase().includes('obtener123') && msg.channel.name.includes('test-de-bot') && (msg.author.id == 434139753131016192)) {
        if (arrPreguntas.length > 0)
            arrPreguntas.forEach(element => {
                msg.channel.send(`${element.autor} ${element.pregunta}`);
            });
        else msg.channel.send('No tengo ninguna informacion como para mostrarte');
    } else

    // Azar, funciona en canal pregunta y test-de-bot
    if (msg.mentions.has(client.user) && msg.content.toLowerCase().includes('elegiazar') && (msg.channel.name.includes('test-de-bot') || msg.channel.name.includes('pregunta'))) {
        if (arrPreguntas.length > 0)
            msg.channel.send(`Pregunta elegida al azar: ${arrPreguntas[Math.floor(Math.random() * arrPreguntas.length)].pregunta}`);
        else msg.channel.send('Estoy vacio :(, agregame preguntas picantes');
    } else
    // Lo etiquetaste -- (msg.content.toLowerCase().includes('<@!834261588961263687>')
    if ((msg.mentions.has(client.user)) && (!msg.content.toLowerCase().includes('como esta')) && (!esbot)) {
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
        msg.reply(insultos[Math.floor(Math.random() * insultos.length)]);
    }

});

client.login('ODM0MjYxNTg4OTYxMjYzNjg3.YH-Upg.IJRfs0lbzemzG5neT-GkhwthhZQ');