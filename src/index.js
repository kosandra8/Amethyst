require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
// make sure all 3 intents are enabled in developer portal
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    
});

client.on('ready' , (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'wave') {
        interaction.reply('Hey👋!');
    }
});


client.login(process.env.TOKEN);