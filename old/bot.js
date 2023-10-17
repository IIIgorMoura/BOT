const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on('ready', () => {
    console.log("logado")
})

cliente.on('message', (message) => {
    if (message.content === "Cyka bliat") {
        message.reply("Kiev Vladvostok")
    }
})

cliente.login('MTE2MzgzMjEwODYzMzAzODkzMQ.GZ9Usf.pOTe1SUzBSKcIzjbfPbnZ8yxjiampyaUukc4xU')