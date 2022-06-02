
const {Client, GatewayIntentBits}= require("discord.js");
require("dotenv").config();


// client is our discord bot
const client = new Client({intents:[GatewayIntentBits.Guilds]});


client.once("ready",()=>{

//calling this function when bot will ready
console.log(`${client.user.username} is online`);
client.user.setActivity("Our first v14 bot")

})



client.login(process.env.TOKEN)