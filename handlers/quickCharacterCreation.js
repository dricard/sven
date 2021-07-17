// ** CHARACTER CREATION **


function increaseAtttribute(npc, level) {
	const { 
		modifierFor
		} = require('./swnData')

	// check if we're the minimum level for the attribute boost
	// we still haven't spent the attribute boost point so we must check for
	// the current attributeBoost value + 1 and compare to minimum level
	if (npc.attributeBoost >= 2 && level < 3 || npc.attributeBoost >= 3 && level < 6 || npc.attributeBoost >= 4 && level < 9) return
	// check if we have enough skill points to increase
	const costToIncrease = npc.attributeBoost + 1
	if (npc.skillPoints < costToIncrease) return
	
	// we have the required level and the skill points to spend, decide on which stat
	if (modifierFor(npc.dex) < 0) {
		// add a point of dex
		npc.dex += 1
		npc.skillPoints -= costToIncrease
		npc.attributeBoost += 1
		return
	} else if (modifierFor(npc.str) < 0) {
		// add a point of str
		npc.str += 1
		npc.skillPoints -= costToIncrease
		npc.attributeBoost += 1
		return
	} else if (modifierFor(npc.con) < 0) {
		// add a point of con
		npc.con += 1
		npc.skillPoints -= costToIncrease
		npc.attributeBoost += 1
		return
	}  else if (modifierFor(npc.int) < 0) {
		// add a point of int
		npc.int += 1
		npc.skillPoints -= costToIncrease
		npc.attributeBoost += 1
		return
	}  else if (modifierFor(npc.wis) < 0) {
		// add a point of wis
		npc.wis += 1
		npc.skillPoints -= costToIncrease
		npc.attributeBoost += 1
		return
	}  else if (modifierFor(npc.cha) < 0) {
		// add a point of cha
		npc.cha += 1
		npc.skillPoints -= costToIncrease
		npc.attributeBoost += 1
		return
	}
	return
}

function numberOfCombatSkills(npc) {
	 const number = npc.skills.reduce( (sum, skill) => {
		 if (skill.name === 'Shoot' || skill.name === 'Punch' || skill.name === 'Stab') {
			 return sum + 1
		 } else {
			 return sum + 0
		 }
	 }, 0)
	 return number
}

function combatSkills(npc) {
	 let listOfCombatSkills = [ ]
	 npc.skills.forEach( skill => {
		 if (skill.name === 'Shoot' || skill.name === 'Punch' || skill.name === 'Stab') {
			 listOfCombatSkills.push(skill)
		 }
	 })
	 return listOfCombatSkills
}

function increaseCombatSkills(npc, level) {
	const { increaseSkill, skillIsMaxedForLevel } = require('./skills')
	const listOfCombatSkills = combatSkills(npc)

	let skillToIncrease = ''
	let lowestLevel = 6
	if (npc.style === '(Ranged)' || npc.style === '(Leader)') {
		// TODO chexk if shoot is maxed out then add melee instead
		// I might have to rethink how I store skills, I should perhaps
		// change from { name: 'skillname', level: 0 } to { skillname: 0 }
		skillToIncrease = 'Shoot'
	} else if (npc.style === '(Melee)') {
		skillToIncrease = 'Stab'
	} else if (listOfCombatSkills.length > 1) {
		// choose the skill with the lowest level
		listOfCombatSkills.forEach( skill => {
			if (skill.level <= lowestLevel) {
				skillToIncrease = skill.name
				lowestLevel = skill.level
			}
		})
	} else if (listOfCombatSkills.length === 1) {
		// only one skill, increase that one
		skillToIncrease = listOfCombatSkills[0].name
	} else {
		skillToIncrease = 'Shoot'
	}
	increaseSkill(skillToIncrease, npc, level)
}

// increase the level of an already made NPC
function gainLevel(npc, level) {
	
	const { rollD, rollDice } = require('./random')
	const { anySkill, addSkillLevelIn } = require('./skills')
	const { 
		modifierFor,
		bestModifierOf
		} = require('./swnData')

	// Roll additional hit points
	const newHP = rollDice(level, npc.hd, (level * (npc.hpm + modifierFor(npc.con))))
	if (newHP > npc.hp) {
		npc.hp = newHP
	} else {
		npc.hp += 1
	}
	// Improve attack bonus
	if (npc.class === 'Warrior') {
		npc.atk = level
	} else {
		npc.atk = Math.floor(level / 2)
	}
	// Improve Savin Throws
	npc.pSave = 16 - level - bestModifierOf(npc.str, npc.con)
	npc.eSave = 16 - level - bestModifierOf(npc.dex, npc.int)
	npc.mSave = 16 - level - bestModifierOf(npc.wis, npc.cha)
	// Gain and spend skill points
	if (npc.class === 'Expert') {
		npc.skillPoints += 4
	} else {
		npc.skillPoints += 3
	}
	// algorith: 
	// - check if at least one combat skill, if not buy one;
	const combatSkills = numberOfCombatSkills(npc)
	if (combatSkills === 0) {
		if (npc.style === '(Ranged)' || npc.style === '(Leader)') {
			npc.skills = addSkillLevelIn('Shoot', npc.skills, npc.psyDisciplines)
		} else if (npc.style === '(Melee)') {
			npc.skills = addSkillLevelIn('Stab', npc.skills, npc.psyDisciplines)
		} else if (npc.dex > npc.str) {
			// buy shoot skill
			npc.skills = addSkillLevelIn('Shoot', npc.skills, npc.psyDisciplines)
		 } else {
			// buy stab or punch skill
			const combatSkill = [ 'Stab', 'Punch' ]
			const skillToAdd = combatSkill[Math.floor(Math.random() * combatSkill.length)]
			npc.skills = addSkillLevelIn(skillToAdd, npc.skills, npc.psyDisciplines)
		 }
		 npc.skillPoints -= 1
	 }
	// - check if a negative modifier to a skill, if so, try to improve that stat
	if (npc.skillPoints > 0 && npc.attributeBoost < 5) {
		increaseAtttribute(npc, level)
	}
	// - if warrior, improve combat skills first, then other skills
	if (npc.skillPoints > 0 && npc.class === 'Warrior') {
		increaseCombatSkills(npc, level)
	}
	// - if expert, improve other skills first, then combat
	// - in all cases, check highest stat modifier to select skills (str => melee, dex => shoot, etc.)
	// highest probability should go to improve existing skills first
	// combat skills: 11, 12, 14
	
	// Psychic effort and techniques
	
	// Purchase improved attributes
	
	// Choose new foci
	
	
	return npc
}

// create a fully random NPC using the quick character creation method found on p.26
function createNPC( level = 1, characterClass = 'random' ) {

	const { npcBasics, 
		backgrounds, 
		psychicSkills, 
		coreTechniques, 
		levelOneTechniques, 
		additionalTechniques, 
		foci,
		anySkill,
		modifierFor,
		modifierStringFor,
		bestModifierOf,
		equipmentPackage
	    } = require('./swnData')
	const { rollD } = require('./random')
	const { addSkillLevelIn } = require('./skills')
	
	function findPsionicIndex(skillName) {
		switch (skillName) {
			case 'Biopsionics':
				return 0
				break
			case 'Metapsionics':
				return 1
				break
			case 'Precognition':
				return 2
				break
			case 'Telekinesis':
				return 3
				break
			case 'Telepathy':
				return 4
				break
			case 'Teleportation':
				return 5
				break
			default:
				return 0
				break
		}
	}
	// arrays are indexed at zero so we need to subtract 1 from the dice rolls
	// Roll basic stats
	// we keep the class index in a const because we'll need it later for the foci
	let npcClassIndex = 0
	switch (characterClass) {
		case 'warrior':
			// we want a warrior so roll between 4 and 6 on table p.26
			npcClassIndex = rollD(3, 3) - 1
			break
		case 'expert':
			// we want an expert so roll between 1 and 3 on table p.26
			npcClassIndex = rollD(3, 0) - 1
			break
		case 'psychic':
			// we want a psychic so roll between 7 and 8 on table p.26
			npcClassIndex = rollD(2, 6) - 1
			break
		default:
			// random generation as per table p.26
			npcClassIndex = rollD(8) - 1
	}
	const npc = npcBasics[ npcClassIndex ]
	// set level
	npc.level = level
	// roll background and add corresponding skills
	let background = backgrounds[ rollD(20) - 1 ]
	let skills = [ ]
	background.skills.forEach( (skill) => {
		skills.push( { name: skill.name, level: skill.level } )
	})
	npc.background = background.name
	// handle psionic skill if character is a Psychic
	let psionicSkills = [ ]
	let psionicTechniques = [ ]
	if (npc.class === "Psychic") {
		// we roll twice on the table
		const index1 = rollD(6) - 1
		const index2 = rollD(6) - 1
		// we check if we rolled the same psionic skill twice
		if (index1 === index2) {
			// if we rolled the same twice add only one skill at level 1
			psionicSkills[0] = psychicSkills[ index1 ]
			psionicSkills[0].level = 1
			// we add the single core technique
			psionicTechniques.push(coreTechniques[index1])
			// and add a level-1 technique we randomly select from those available to that discipline
			const additionalTechniques = levelOneTechniques[index1]
			psionicTechniques.push(additionalTechniques[Math.floor(Math.random() * additionalTechniques.length)])
		} else {
			// if we didn't roll the same psionic skill twice, we add the 2 skills at level-0
			// and the 2 core techniques corresponding to each discipline
			psionicSkills[0] = psychicSkills[ index1 ]
			psionicSkills[0].level = 0
			psionicSkills[1] = psychicSkills[ index2 ]
			psionicSkills[1].level = 0
			psionicTechniques.push(coreTechniques[index1])
			psionicTechniques.push(coreTechniques[index2])
		}
	}
	// we generate the character's foci (-1 because of zero-indexed arrays)
	const characterFoci = foci[npcClassIndex][ rollD(6, -1) ]
	// many focus add a skill so we add those now
	for (const focus of characterFoci) {
		if (focus.skill != '') {
			// there is a special case for the Psychic Training focus that we process here
			if (focus.skill === 'any psychic') {
				psionicSkills = addSkillLevelIn(focus.skill, skills, psionicSkills)
				// remove the bogus skill 'any psychic' from the list of skills
				skills = skills.filter(skill => skill.name != 'any psychic')
				// add the technique for the psionic skill we added
				// either we gained a level in one of the two skills (and we need to add a level 1 technique)
				// or we added a third skill (and we need to add the core technique of that skill)
				if (psionicSkills.length === 3) {
					// we add the core technique of the new skill
					// if there 3 psionic skills, the new one is the 3rd with an index of 2
					const techniqueIndex = findPsionicIndex(psionicSkills[2].name)
					psionicTechniques.push(coreTechniques[techniqueIndex])
				} else {
					// we added a level in a psionic skill so we add a level 1 technique
					const skillIndex =  (psionicSkills[0].level === 1) ? 0 : 1
					const techniqueIndex = findPsionicIndex(psionicSkills[skillIndex].name)
					const additionalTechniques = levelOneTechniques[techniqueIndex]
					psionicTechniques.push(additionalTechniques[Math.floor(Math.random() * additionalTechniques.length)])
				}
			} else {
				skills = addSkillLevelIn(focus.skill, skills, psionicSkills)
			}
		}
	}
	// FINAL TOUCHES
	// Bonus skill
	skills = addSkillLevelIn(anySkill[Math.floor(Math.random() * anySkill.length)], skills, psionicSkills)
	const highestPsy = psionicSkills.reduce( (maxLevel, skill) => {
		if (maxLevel > skill.level) {
			return maxLevel
		} else {
			return skill.level
		}
	}, 0)
	if (psionicSkills.length != 0) {
		npc.maxEffort = 1 + highestPsy + bestModifierOf(npc.con, npc.wis)
	}
	// calculate saves
	npc.pSave = 16 - npc.level - bestModifierOf(npc.str, npc.con)
	npc.eSave = 16 - npc.level - bestModifierOf(npc.dex, npc.int)
	npc.mSave = 16 - npc.level - bestModifierOf(npc.wis, npc.cha)
	// add bonus hp for 'Die Hard' focus
	if (characterFoci.filter( focus => focus.name === 'Die Hard' ).length > 0) {
		npc.hpm += 2
	}
	// roll hit points
	npc.hp = rollD(npc.hd, npc.hpm) + modifierFor(npc.con)
	if (npc.hp < 1) { npc.hp = 1 }
	// randomly select an equipment package
	const equipment = equipmentPackage[Math.floor(Math.random() * equipmentPackage.length)]
	npc.equipment = equipment.equipment
	npc.credits = equipment.credits
	npc.armor = equipment.armor
	npc.shield = equipment.shield
	npc.shieldAC = equipment.shieldAC
	npc.armorAC = equipment.AC
	npc.AC = equipment.AC + equipment.shieldAC + modifierFor(npc.dex)
	if (characterFoci.filter( focus => focus.name === 'Ironhide' ).length > 0) {
		npc.innateAC = 15 + Math.floor(npc.level / 2) + 1
		if (npc.AC < npc.innateAC) { npc.AC = npc.innateAC }
	}
	npc.weapons = equipment.weapons
	npc.skills = skills
	npc.foci = characterFoci
	npc.psyDisciplines = psionicSkills
	npc.psyTechniques = psionicTechniques
	// level character if more than level 1
	if (npc.level === 1) {
		return npc
	} else {
		let newNpc = npc
		const level = npc.level
		for (let i = 2; i <= level; i++) {
			newNpc = gainLevel(newNpc, i)
		}
		return npc
	}
}

module.exports = { createNPC }