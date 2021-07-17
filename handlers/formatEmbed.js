

const theEmbed = {
	color:  0x0099ff,
	title: 'Warrior (Melee) ',
	footer: { text: `Arguments: ${ level === 0 ? "Lvl 1 (default) " : "Lvl " + level + " " }${ characterClass != "" ? characterClass : "random class" }` },
	fields:[
		{
			name: 'Background',
			value: 'Scholar',
			inline: true
		},
		{
			name: 'hp',
			value: '8',
			inline: true
		},
		{
			name: 'Atk Bonus',
			value: '+1',
			inline: true
		},
		{
			name: 'Physical',
			value: "**STR**: 14 (**+1**)\n**DEX**: 9 (0)\n**CON**: 12 (**+1**)",
			inline: true
		},
		{
			name: 'Mental',
			value: "**INT**: 7 (**-1**)\n**WIS**: 10 (0)\n**CHA**: 12 (**+1**)",
			inline: true
		}
	]
}

message.channel.send( { embed: theEmbed } )