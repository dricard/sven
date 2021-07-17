	//-- STARS WITHOUT NUMBER DATA
	
	const npcBasics = [
		{ class: 'Expert', style: '(Smart)', str: 10, dex: 12, con: 11, int: 14, wis: 7, cha: 9, hd: 6, hpm: 0, atk: 0, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Expert', style: '(Smooth)', str: 7, dex: 9, con: 10, int: 12, wis: 11, cha: 14, hd: 6, hpm: 0, atk: 0, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Expert', style: '(Nimble)', str: 10, dex: 14, con: 12, int: 11, wis: 9, cha: 7, hd: 6, hpm: 0, atk: 0, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Warrior', style: '(Melee)', str: 14, dex: 9, con: 12, int: 7, wis: 10, cha: 11, hd: 6, hpm: 2, atk: 1, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Warrior', style: '(Ranged)', str: 9, dex: 14, con: 12, int: 10, wis: 7, cha: 11, hd: 6, hpm: 2, atk: 1, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Warrior', style: '(Leader)', str: 7, dex: 10, con: 9, int: 11, wis: 12, cha: 14, hd: 6, hpm: 2, atk: 1, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Psychic', style: '(Seer)', str: 9, dex: 11, con: 12, int: 10, wis: 14, cha: 7, hd: 6, hpm: 0, atk: 0, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 },
		{ class: 'Psychic', style: '(Adept)', str: 12, dex: 10, con: 14, int: 9, wis: 11, cha: 7, hd: 6, hpm: 0, atk: 0, level: 1, hp: 0, AC: 10, armorAC: 10, shieldAC: 0, innateAC: 10, background: '', armor: '', shield: '', weapons: '', equipment: '', credits: 0, skills: '', foci: '', psyDisciplines: '', psyTechniques: '', maxEffort: 0, pSave: 15, eSave: 15, mSave: 15, skillPoints: 0, attributeBoost: 0 }
	]
	
	const backgrounds = [
		{ name: 'Barbarian', skills: [ { name: 'Survive', level: 0 }, { name: 'Notice', level: 0 }, { name: 'Punch', level: 0 } ] },
		{ name: 'Clergy', skills: [ { name: 'Talk', level: 0 }, { name: 'Perform', level: 0 }, { name: 'Know', level: 0 } ] },
		{ name: 'Courtesan', skills: [ { name: 'Perform', level: 0 }, { name: 'Notice', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Criminal', skills: [ { name: 'Connect', level: 0 }, { name: 'Sneak', level: 0 }, { name: 'Talk', level: 0 } ] },
		{ name: 'Dilettante', skills: [ { name: 'Connect', level: 0 }, { name: 'Know', level: 0 }, { name: 'Talk', level: 0 } ] },
		{ name: 'Entertainer', skills: [ { name: 'Perform', level: 0 }, { name: 'Talk', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Merchant', skills: [ { name: 'Trade', level: 0 }, { name: 'Talk', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Noble', skills: [ { name: 'Lead', level: 0 }, { name: 'Connect', level: 0 }, { name: 'Administer', level: 0 } ] },
		{ name: 'Official', skills: [ { name: 'Administer', level: 0 }, { name: 'Talk', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Peasant', skills: [ { name: 'Exert', level: 0 }, { name: 'Sneak', level: 0 }, { name: 'Survive', level: 0 } ] },
		{ name: 'Physician', skills: [ { name: 'Heal', level: 0 }, { name: 'Know', level: 0 }, { name: 'Notice', level: 0 } ] },
		{ name: 'Pilot', skills: [ { name: 'Pilot', level: 0 }, { name: 'Fix', level: 0 }, { name: 'Shoot', level: 0 } ] },
		{ name: 'Politician', skills: [ { name: 'Talk', level: 0 }, { name: 'Lead', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Scholar', skills: [ { name: 'Know', level: 0 }, { name: 'Administer', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Soldier', skills: [ { name: 'Shoot', level: 0 }, { name: 'Exert', level: 0 }, { name: 'Survive', level: 0 } ] },
		{ name: 'Spacer', skills: [ { name: 'Fix', level: 0 }, { name: 'Pilot', level: 0 }, { name: 'Program', level: 0 } ] },
		{ name: 'Technician', skills: [ { name: 'Fix', level: 0 }, { name: 'Notice', level: 0 }, { name: 'Exert', level: 0 } ] },
		{ name: 'Thug', skills: [ { name: 'Punch', level: 0 }, { name: 'Talk', level: 0 }, { name: 'Connect', level: 0 } ] },
		{ name: 'Vagabond', skills: [ { name: 'Notice', level: 0 }, { name: 'Sneak', level: 0 }, { name: 'Survive', level: 0 } ] },
		{ name: 'Worker', skills: [ { name: 'Connect', level: 0 }, { name: 'Exert', level: 0 }, { name: 'Work', level: 0 } ] }
	]
	
	const psychicSkills = [
		{ name: 'Biopsionics', level: 0 },
		{ name: 'Metapsionics', level: 0 },
		{ name: 'Precognition', level: 0 },
		{ name: 'Telekinesis', level: 0 },
		{ name: 'Telepathy', level: 0 },
		{ name: 'Teleportation', level: 0 }
	]
	
	const coreTechniques = [
		{ name: 'Psychic Succor' },
		{ name: 'Psychic Refinement' },
		{ name: 'Oracle' },
		{ name: 'Telekinetic Manipulation' },
		{ name: 'Telepathic Contact' },
		{ name: 'Personal Apportation' }	
	]
	
	const levelOneTechniques = [
		[ { name: 'Mastered Succor' }, { name: 'Organic Purification Protocols' }, { name: 'Remote Repair' } ],
		[ { name: 'Cloak Powers' }, { name: 'Mindtracing' }, { name: 'Synthetic Adaptation' } ],
		[ { name: 'Intuitive Response' }, { name: 'Sense the Need' }, { name: 'Terminal Reflection' } ],
		[ { name: 'Kinetic Transversal' }, { name: 'Pressure Field' }, { name: 'Telekinetik Armory' } ],
		[ { name: 'Facile Mind' }, { name: 'Transmit Thought' } ],
		[ { name: 'Proficient Apportation' }, { name: 'Spatial Awareness' }	]
	]
	
	const foci = [
		// Expert (Smart)
		[
			[ { name: 'Specialist/Fix', skill: 'Fix' }, { name: 'Die Hard', skill: '' } ],
			[ { name: 'Hacker', skill: 'Program' }, { name: 'Tinker', skill: 'Fix' } ],
			[ { name: 'Specialist/Know', skill: 'Know' }, { name: 'Healer', skill: 'Heal' } ],
			[ { name: 'Specialist/Fix', skill: 'Fix' }, { name: 'Tinker', skill: 'Fix' } ],
			[ { name: 'Healer', skill: 'Heal' }, { name: 'Ironhide', skill: '' } ],
			[ { name: 'Specialist/Fix', skill: 'Fix' }, { name: 'Hacker', skill: 'Program' } ],
		],
		// Expert (Smooth)
		[
			[ { name: 'Diplomat', skill: 'Talk' }, { name: 'Connected', skill: 'Connect' } ],
			[ { name: 'Specialist/Talk', skill: 'Talk' }, { name: 'Die Hard', skill: '' } ],
			[ { name: 'Diplomat', skill: 'Talk' }, { name: 'Alert', skill: 'Notice' } ],
			[ { name: 'Specialist/Lead', skill: 'Lead' }, { name: 'Authority', skill: 'Lead' } ],
			[ { name: 'Healer', skill: 'Heal' }, { name: 'Specialist/Talk', skill: 'Talk' } ],
			[ { name: 'Specialist/Notice', skill: 'Notice' }, { name: 'Specialist/Talk', skill: 'Talk' } ],
		],
		// Expert (Nimble)
		[
			[ { name: 'Specialist/Pilot', skill: 'Pilot' }, { name: 'Starfarer', skill: 'Pilot' } ],
			[ { name: 'Healer', skill: 'Heal' }, { name: 'Die Hard', skill: '' } ],
			[ { name: 'Tinker', skill: 'Fix' }, { name: 'Gunslinger', skill: 'Shoot' } ],
			[ { name: 'Specialist/Sneak', skill: 'Sneak' }, { name: 'Assassin', skill: 'Sneak' } ],
			[ { name: 'Specialist/Sneak', skill: 'Sneak' }, { name: 'Specialist/Exert', skill: 'Exert' } ],
			[ { name: 'Specialist/Entertain', skill: 'Entertain' }, { name: 'Specialist/Sneak', skill: 'Sneak' } ],
		],
		// Warrior (Melee)
		[
			[ { name: 'Savage Fray', skill: 'Stab' }, { name: 'Shocking Assault', skill: 'Stab' } ],
			[ { name: 'Assassin', skill: 'Sneak' }, { name: 'Specialist/Sneak', skill: 'Sneak' } ],
			[ { name: 'Armsman', skill: 'Stab' }, { name: 'Close Combatant', skill: 'Stab' } ],
			[ { name: 'Close Combatant', skill: 'Punch' }, { name: 'Savage Fray', skill: 'Stab' } ],
			[ { name: 'Ironhide', skill: '' }, { name: 'Die Hard', skill: '' } ],
			[ { name: 'Unarmed Combatant', skill: 'Punch' }, { name: 'Close Combatant', skill: 'Stab' } ],
		],
		// Warrior (Ranged)
		[
			[ { name: 'Gunslinger', skill: 'Shoot' }, { name: 'Close Combatant', skill: 'Stab' } ],
			[ { name: 'Sniper', skill: 'Shoot' }, { name: 'Specialist/Sneak', skill: 'Sneak' } ],
			[ { name: 'Assassin', skill: 'Sneak' }, { name: 'Specialist/Sneak', skill: 'Sneak' } ],
			[ { name: 'Ironhide', skill: '' }, { name: 'Die Hard', skill: '' } ],
			[ { name: 'Gunslinger', skill: 'Shoot' }, { name: 'Tinker', skill: 'Fix' } ],
			[ { name: 'Close Combat', skill: 'Shoot' }, { name: 'Alert', skill: 'Notice' } ],
		],
		// Warrior (Leader)
		[
			[ { name: 'Gunslinger', skill: 'Shoot' }, { name: 'Authority', skill: 'Lead' } ],
			[ { name: 'Ironhide', skill: '' }, { name: 'Connected', skill: 'Connect' } ],
			[ { name: 'Armsman', skill: 'Stab' }, { name: 'Specialist/Lead', skill: 'Lead' } ],
			[ { name: 'Gunslinger', skill: 'Shoot' }, { name: 'Specialist/Talk', skill: 'Talk' } ],
			[ { name: 'Assassin', skill: 'Sneak' }, { name: 'Die Hard', skill: '' } ],
			[ { name: 'Close Combat', skill: 'Shoot' }, { name: 'Henchkeeper', skill: 'Lead' } ],
		],
		// Psychic (Seer)
		[
			[ { name: 'Alert', skill: 'Notice' } ],
			[ { name: 'Healer', skill: 'Heal' } ],
			[ { name: 'Specialist/Notice', skill: 'Notice' } ],
			[ { name: 'Psychic Training', skill: 'any psychic' } ],
			[ { name: 'Savage Fray', skill: 'Stab' } ],
			[ { name: 'Hacker', skill: 'Program' } ],
		],
		// Psychic (Adept)
		[
			[ { name: 'Armsman', skill: 'Stab' } ],
			[ { name: 'Ironhide', skill: '' } ],
			[ { name: 'Die Hard', skill: '' } ],
			[ { name: 'Psychic Training', skill: 'any psychic' } ],
			[ { name: 'Healer', skill: 'Heal' } ],
			[ { name: 'Unarmed Combat', skill: 'Stab' } ],
		],
	]
	
	const anySkill = [
		'Administer',
		'Connect',
		'Exert',
		'Fix',
		'Heal',
		'Know',
		'Lead',
		'Notice',
		'Perform',
		'Pilot',
		'Program',
		'Punch',
		'Shoot',
		'Sneak',
		'Stab',
		'Survive',
		'Talk',
		'Trade',
		'Work'
	]
	
	const anyPsySkill = [
		'Biopsionics',
		'Metapsionics',
		'Precognition',
		'Telekinesis',
		'Telepathy',
		'Teleportation'
	]
	
	function modifierFor(attribute) {
		if (attribute <= 3) {
			return -2
		} else if ( attribute >= 4 && attribute < 8 ) {
			return -1
		} else if ( attribute >= 8 && attribute < 14) {
			return 0
		} else if ( attribute >= 14 && attribute < 18) {
			return 1
		} else {
			return 2
		}
	}

	function modifierStringFor(attribute) {
		if (attribute <= 3) {
			return '-2'
		} else if ( attribute >= 4 && attribute < 8 ) {
			return '-1'
		} else if ( attribute >= 8 && attribute < 14) {
			return '+0'
		} else if ( attribute >= 14 && attribute < 18) {
			return '+1'
		} else {
			return '+2'
		}
	}
	
	function bestModifierOf(attribute1, attribute2) {
		return attribute1 > attribute2 ? modifierFor(attribute1) : modifierFor(attribute2)
	}
	
	const equipmentPackage = [
		{ name: 'Barbarian', weapons: 'Spear (1d6+1), Knife (1d4)', armor: 'Primitive hide (AC 13)', AC: 13, shield: 'Primitive shield (+1 AC)', shieldAC: 1, equipment: 'Backpack (TL0), 7 days rations, 20m rope', credits: 500},
		{ name: 'Blade', weapons: 'Monoblade sword (1d8+1), Thermal knife (1d6)', armor: 'Woven body armor (AC 15), Secure clothing (AC 13)', AC: 15, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), compad, Lazarus patch', credits: 50},
		{ name: 'Blade', weapons: 'Monoblade sword (1d8+1), Thermal knife (1d6)', armor: 'Woven body armor (AC 15), Secure clothing (AC 13)', AC: 15, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), compad, Lazarus patch', credits: 50},
		{ name: 'Thief', weapons: 'Laser pistol (1d6), Monoblade knife (1d6)', armor: 'Armored undersuit (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), compad, metatool, climbing harness, low-light goggles, 2 type A cells', credits: 25},
		{ name: 'Hacker', weapons: 'Laser pistol (1d6)', armor: 'Secure clothing (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Postech toolkit, 3 units spare parts, dataslab, metatool, 2 line shunts, 2 type A cells', credits: 100},
		{ name: 'Gunslinger', weapons: 'Laser pistol (1d6), monoblade knife (1d6)', armor: 'Armored undersuit (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), compad, 8 type A cells', credits: 100},
		{ name: 'Soldier', weapons: 'Combat rifle (1d12), knife (1d4)', armor: 'Woven body armor (AC 15)', AC: 15, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), compad, 80 rounds ammo', credits: 100},
		{ name: 'Scout', weapons: 'Laser rifle (1d10), knife (1d4)', armor: 'Armored vacc suit (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), survey scanner, survival kit, binoculars (TL3), compad, 8 type A cells', credits: 25},
		{ name: 'Medic', weapons: 'Laser pistol (1d6)', armor: 'Secure clothing (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), medkit, compad, bioscanner, compad, 4 lazarus patches, 2 doses of Lift', credits: 25},
		{ name: 'Civilian', weapons: '', armor: 'Secure clothing (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Compad', credits: 700},
		{ name: 'Technician', weapons: 'Laser pistol (1d6), monoblade knife (1d6)', armor: 'Armored undersuit (AC 13)', AC: 13, shield: '', shieldAC: 0, equipment: 'Backpack (TL0), postech toolkit, dataslab, metatool, compad, 6 units spare parts, 4 type A cells', credits: 200}
	]
		
	module.exports = { 
		npcBasics, 
		backgrounds, 
		psychicSkills, 
		coreTechniques, 
		levelOneTechniques, 
		foci, 
		anySkill,
		anyPsySkill,
		modifierFor,
		modifierStringFor,
		bestModifierOf,
		equipmentPackage
	 }
