module.exports = {
	name: 'ping',
	description: "This is a simple ping-pong command to test the bot's response.",
	execute(message, args, Discord) {
		// command code goes here
		
		message.channel.send('Pong!')
		
	}
}