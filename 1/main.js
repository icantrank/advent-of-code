// fs with promises
const fs = require('fs').promises;

// async function
async function main() {

	// read file
	const data = await fs.readFile('input.txt');

	let elves = data.toString().split('\r\n\r\n').map(elf => elf.split('\r\n')).map(elf => { 
		calories = elf.map(calory => Number(calory))
		return {
			calories: calories,
			total: calories.reduce((a, b) => a + b, 0)
		}
	})
	
	sortedElves = elves.sort((a, b) => b.total - a.total)

	let highest1 = sortedElves[0].total
	let highest2 = sortedElves[1].total
	let highest3 = sortedElves[2].total

	let total = highest1 + highest2 + highest3
	
	debugger

}
main();