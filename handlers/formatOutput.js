// function to format outputs

const { 
	npcBasics, 
	modifierFor,
	modifierStringFor
	} = require('../handlers/swnData')

function codeBlock(text) {
	return `\`\`\`\n${text}\n\`\`\``
}

function simpleOutput(npc) {
	// we format the output of the NPC generation
	let outputString = `${npc.class} ${npc.style} Lvl:${npc.level} AC: ${ npc.AC } hp: ${ npc.hp } (d${ npc.hd }+${ npc.hpm + modifierFor(npc.con) }) atk: ${ npc.atk >= 0 ? '+' : '' }${ npc.atk }  Background: ${ npc.background }.`
	outputString += `\nSTR:${ npc.str } (${modifierStringFor(npc.str)}) DEX:${npc.dex} (${modifierStringFor(npc.dex)}) CON:${npc.con} (${modifierStringFor(npc.con)}) INT:${npc.int} (${modifierStringFor(npc.int)}) WIS:${npc.wis} (${modifierStringFor(npc.wis)}) CHA:${npc.cha} (${modifierStringFor(npc.cha)})`
	outputString += `\nArmor: ${ npc.armor }${ npc.shield != '' ? ', Shield: ' : '' }${ npc.shield }.`
	outputString += `${ npc.weapons != '' ? `\nWeapons: ${ npc.weapons }.` : '' }`
	
	// build skills list
	let skillList = ''
	for (const skill of npc.skills) {
		skillList += `${skill.name}-${skill.level}, `
	}
	// remove the extraneous comma at the end
	skillList = skillList.slice(0, -2)
	skillList += '.'

	outputString += `\nSkills: ${ skillList }`
	
	// build the character's foci
	let fociList = ''
	for (const focus of npc.foci) {
		fociList += `${focus.name}, `
	}
	// remove the extraneous comma at the end
	fociList = fociList.slice(0, -2)
	fociList += '.'

	outputString += `\nFoci: ${ fociList }`
	
	// if the character is a Psychic we add the psionic skills and techniques to the output
	let psiDisciplines = ''
	let psiTechniques = ''
	if (npc.psyDisciplines.length > 0) {
		npc.psyDisciplines.forEach( (skill) => {
			psiDisciplines += `${skill.name}-${skill.level}, `
		})
		// remove the extra comma
		psiDisciplines = psiDisciplines.slice( 0, -2)
		psiDisciplines += '.'
		npc.psyTechniques.forEach( (technique) => {
			psiTechniques += `${technique.name}, `
		})
		// remove the extra comma
		psiTechniques = psiTechniques.slice( 0, -2)
		psiTechniques += '.'
	}

	if (npc.psyDisciplines != '') {
		outputString += `\nPsy Disciplines: ${ psiDisciplines }`
		outputString += `\nPsy Techniques: ${ psiTechniques }`
		outputString += `\nMaximum Effort: ${ npc.maxEffort }`
	}
	// add saves
	outputString += `\nSaves: Physical: ${ npc.pSave }, Evasion: ${ npc.eSave }, Mental: ${ npc.mSave }.`
	outputString += `\nEquipment: ${ npc.equipment }.\nCredits: ${ npc.credits }.`
	outputString += `\nSkill points: ${ npc.skillPoints } stat boost: ${ npc.attributeBoost }.`
	return `\`\`\`\n${outputString}\n\`\`\``
}

module.exports = { codeBlock, simpleOutput }