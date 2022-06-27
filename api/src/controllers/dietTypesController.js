const { Diet } = require("../db");

const diets = [
	"gluten free",
	"ketogenic",
	"vegetarian",
	"lacto ovo vegetarian",
	"ovo vegetarian",
	"vegan",
	"pescetarian",
	"paleo",
	"primal",
	"low FODMAP",
	"whole 30",
	"dairy free",
];

async function preload() {
	const mapDiets = diets.forEach(async (element) => {
		await Diet.findOrCreate({
			where: { name: element },
		});
	});

	let allDiets = await Diet.findAll();
	allDiets = Diet.findAll();
	return allDiets;
}

module.exports = {
	preload,
};
