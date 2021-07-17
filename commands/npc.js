module.exports = {
	name: 'npc',
	description: "creates a random npc (as per the quick character creation rules).",
	execute(message, args, Discord) {
		const { dmID } = require('../config.json')
		const { simpleOutput } = require('../handlers/formatOutput')
		// for this command we want to prevent non-gamemasters to use it
		if (message.member.roles.cache.has(dmID)) {
			// command code goes here
			
			// get required handlers for this
			const { createNPC } = require('../handlers/quickCharacterCreation')
			
			// process arguments
			let characterClass = ''
			let level = 0	// indicates default level, which is 1 will be used
			let footnote = ''
			if (args.length) {
				for (const argument of args) {
					if (isNaN(argument)) {
						// not a number, use is as a characterClass argument
						if (!['expert', 'warrior', 'psychic'].includes(argument)) {
							if (argument.startsWith('w')) {
								characterClass = 'warrior'
							} else if (argument.startsWith('e')) {
								characterClass = 'expert'
							} else if (argument.startsWith('p')) {
								characterClass = 'psychic'
							} else {
								console.log('unrecognized argument (not a proper class name)')
							}
						} else {
							characterClass = argument
						}
					} else {
						// this is a number so we use that for the level
						// if it's in the appropriate range
						const number = parseInt(argument)
						if (number > 0 && number <= 20) {
							level = number
						}
					}
				}
			}		
			
			// console.log(`class: ${characterClass} lv: ${level}`)
			// create the NPC with the proper arguments
			if (level === 0) { level = 1 } // if no level was passed as an argument default to level 1
			const npc = createNPC( level, characterClass )
			message.channel.send(simpleOutput(npc))
		} else {
			message.channel.send("You don't have the permissions required to run this command. Sorry!")
		}
	}
}