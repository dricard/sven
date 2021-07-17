const { prefix, token } = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

// require the node.js native file system utilities
const fs = require('fs')
// create a collection for these commands
client.commands = new Discord.Collection()
// only read files with type js in the commands directory
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
// add a require statement for each of the commands files
// and add each command to our collection
for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}

client.once('ready', () => {
	console.log('Sven is online!')
})

// handle messages
client.on('message', message => {
	// we screen to process only messages that starts with the defined prefix with a guard statement
	if (!message.content.startsWith(prefix) || message.author.bot) return
	// we remove the prefix from the command to easy process with the switch statement and split the arguments
	const args = message.content.slice(prefix.length).split(/ +/)
	// shift removes and assigns the first argument (the command), we then convert it to lowercase so any
	// variation will vork
	const commandName = args.shift().toLowerCase()
	
	// we check if the commandName is in our list of valid commands
	if (client.commands.has(commandName)) {
		const command = client.commands.get(commandName)
		try {
			command.execute(message, args)
		} catch(error) {
			console.error(error)
			message.reply('There was an error executing that command.')
		}
	} else {
		message.channel.send("**Unknown command**. Self-destruct sequence initiated. 5...4...3...")
	}

})

client.login(token)
