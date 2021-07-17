//-- UTILITIES

function rollD(sides, mod = 0) {
	return Math.floor(Math.random() * sides) + 1 + mod
}

function rollDice(number, side, mod = 0) {
	let result = 0
	for (let i = 1; i < number; i++) {
		result += rollD(side)
	}
	return result + mod
}

module.exports = { rollD, rollDice }