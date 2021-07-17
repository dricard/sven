// methods related to skills

const { anySkill, anyPsySkill } = require('../handlers/swnData')

// Expected format of the skills list is an array of records
// each skills is represented as a record skill = { name: 'Shoot', level: 0 }
// the list of skills is then [ { name: 'Shoot', level: 0 }, { name: 'Stab', level: 1 } ]
// This version is for creating a first level character and adding skills gained through
// foci. It does not let the skill be above 1st level and does not subtract skill points.
// For gaining levels and considering skill points use increaseSkill() instead.
function addSkillLevelIn(skillName, skills, psionicSkills) {
	// first check if we're in the special case of 'any psychic' which occurs for
	// psychic characters focus sometimes.
	let nameOfSkillToAdd = skillName	// we preserve skillName to branch later on
	let listOfSkillsToModify = skills
	if (skillName === 'any psychic') {
		// it's the special case, we modify the psionicSkills and 'any psychic' is replaced with a
		// random psionic skill name
		listOfSkillsToModify = psionicSkills
		nameOfSkillToAdd = anyPsySkill[Math.floor(Math.random() * anyPsySkill.length)]
	}
	// check if the skill to add (nameOfSkillToAdd) is already in the listOfSkillsToModify array
	if (listOfSkillsToModify.filter( skill => skill.name === nameOfSkillToAdd ).length > 0) {
		// it's already in the array so we need to find it and increase its level by one
		// we scan through the array of skills
		for (const skillRecord of listOfSkillsToModify ) {
			// we check if we find one that matches our skillToAdd
			if (skillRecord.name === nameOfSkillToAdd) {
				// skill is already in skills' list so increase level unless already at level 1
				if (skillRecord.level >= 1) {
					// we need to add another skill randomly (and recursively)
					if (skillName === 'any psychic') {
						listOfSkillsToModify = addSkillLevelIn(anyPsySkill[Math.floor(Math.random() * anyPsySkill.length)], skills, psionicSkills)
					} else {
						listOfSkillsToModify = addSkillLevelIn(anySkill[Math.floor(Math.random() * anySkill.length)], skills, psionicSkills)
					}
				} else {
					// the skill is in the list but it's only level 0 so we simply increase its level by one
					skillRecord.level += 1
				}
			}
		}
	} else {
		// the skill isn't already in the skills list so we add it
		listOfSkillsToModify.push( { name: nameOfSkillToAdd, level: 0 } )
	}
	if (skillName === 'any psychic') {
		return psionicSkills
	} else {
		return skills
	}
}

function skillIsMaxedForLevel(skillLevel, currentLevel) {
	return (skillLevel >= 1 && currentLevel < 3 || skillLevel >= 2 && currentLevel < 6 || skillLevel >= 3 && currentLevel < 9) 
}

function increaseSkill(skillName, npc, currentLevel) {
	// don't waste time if we don't have skill points
	if (npc.skillPoints === 0) return
	// it's already in the array so we need to find it and check its level
	// to determine its cost and if we can increase it at our currentLevel
	for (const skillRecord of npc.skills ) {
		// we check if we find one that matches our skillToAdd
		if (skillRecord.name === skillName) {
			// skill is already in skills' list so we check its level and see if we CAN
			// increase it at our current level otherwise we bail out
			if (skillIsMaxedForLevel(skillRecord.level, currentLevel)) return
			// and if we have enough SP (otherwise bail out)
			if (npc.skillPoints < skillRecord.level + 2) return
			// so we can increase and have enough points, let's do this
			skillRecord.level += 1
			npc.skillPoints -= skillRecord.level + 1
			// our work here is done, let's move on!
			return
		}
	}
	// if we make it here it means that
	// the skill isn't already in the skills list so we add it if we have 1 SP
	if (npc.skillPoints >= 1) {
		npc.skills.push( { name: skillName, level: 0 } )
		npc.skillPoints -= 1
		// our work here is done, let's move on!
		return
	}
	// well that was anticlimactic!
	return
}

module.exports = { addSkillLevelIn, increaseSkill, skillIsMaxedForLevel }