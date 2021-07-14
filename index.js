const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
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
        let auxjson = fs.readFileSync('insultos.json');
        let myobj = JSON.parse(auxjson);
        let cosasleo = ["Sos muy hermoso", "Vuelves locas a todas", "Fiu fiu!", "Tremendo pito tenes papu", "Te haria un buen brrr en las pelotas", " Ese aspecto morocho te hace hermoso bebe", "Te amo", "Todo lo que haces me calienta"];
        let usuarios = msg.mentions.members.array();
        let idbot = client.user.id;
        let idleo = 434139753131016192;
        if (myobj.datos.length > 0) {
            for (let i in usuarios) {
                if (usuarios[i] != idbot)
                    if (usuarios[i] == idleo) {
                        msg.channel.send(`${usuarios[i]} ${cosasleo[Math.floor(Math.random() * cosasleo.length)]}`);
                    } else
                        msg.channel.send(`${usuarios[i]} ${myobj.datos[Math.floor(Math.random() * myobj.datos.length)].mensaje}`);
            }
        } else msg.reply('Lo insultaria pero ninguno de estos conchudos me cargo nada, fracasados de mierda');
    } else

    // Agregar insultos al json
    if ((msg.mentions.has(client.user)) && (msg.content.toLowerCase().includes('agregarinsulto'))) {
        let test = msg.content.replace('agregarinsulto', '').replaceAll(`<@!834261588961263687>`, ''); //  /^([0-9])*$/
        if (!esbot) {
            let auxjson = fs.readFileSync('insultos.json');
            let myobj = JSON.parse(auxjson);
            myobj.datos.push({ 'autor': msg.author.username, 'mensaje': test.trim() });
            myobj.indice++;
            let dato = JSON.stringify(myobj, null, 2);
            fs.writeFileSync('insultos.json', dato);
        }
    } else

    // Preguntas anonimas, funciona en canal pregunta y test-de-bot
    if (msg.mentions.has(client.user) && msg.content.toLowerCase().includes('pregunta') && (msg.channel.name.includes('test-de-bot') || msg.channel.name.includes('pregunta'))) {
        let test = msg.content.replace('pregunta', '').replaceAll(`<@!834261588961263687>`, ''); //  /^([0-9])*$/
        if (!esbot) {
            let auxjson = fs.readFileSync('preguntas.json');
            let myobj = JSON.parse(auxjson);
            myobj.datos.push({ 'autor': msg.author.username, 'mensaje': test.trim() });
            myobj.indice++;
            let dato = JSON.stringify(myobj, null, 2);
            fs.writeFileSync('preguntas.json', dato);
            msg.channel.send(`${myobj.indice}) ${test}`);
            msg.delete();
        }
    } else

    // Obtener, funciona en canal  test-de-bot
    if (msg.mentions.has(client.user) && msg.content.toLowerCase().includes('obtener123') && msg.channel.name.includes('test-de-bot') && (msg.author.id == 434139753131016192)) {
        let auxjson = fs.readFileSync('preguntas.json');
        let myobj = JSON.parse(auxjson);
        if (myobj.datos.length > 0)
            myobj.datos.forEach(element => {
                msg.channel.send(`${element.autor} ${element.mensaje}`);
            });
        else msg.channel.send('No tengo ninguna informacion como para mostrarte');
    } else

    // Azar, funciona en canal pregunta y test-de-bot
    if (msg.mentions.has(client.user) && msg.content.toLowerCase().includes('elegiazar') && (msg.channel.name.includes('test-de-bot') || msg.channel.name.includes('pregunta'))) {
        let auxjson = fs.readFileSync('preguntas.json');
        let myobj = JSON.parse(auxjson);
        if (myobj.datos.length > 0)
            msg.channel.send(`Pregunta elegida al azar: ${myobj.datos[Math.floor(Math.random() * myobj.datos.length)].mensaje}`);
        else msg.channel.send('Estoy vacio :(, agregame preguntas picantes');
    } else

    // Lo etiquetaste -- (msg.content.toLowerCase().includes('<@!834261588961263687>')
    if ((msg.mentions.has(client.user)) && (!msg.content.toLowerCase().includes('como esta')) && (!esbot)) {
        let auxjson = fs.readFileSync('insultos.json');
        let myobj = JSON.parse(auxjson);
        if (myobj.datos.length > 0)
            msg.reply(myobj.datos[Math.floor(Math.random() * myobj.datos.length)].mensaje);
        else msg.reply('Te insultaria pero ninguno de estos pelotudos me cargo nada');
    }

});

client.login('ODM0MjYxNTg4OTYxMjYzNjg3.YH-Upg.IJRfs0lbzemzG5neT-GkhwthhZQ');