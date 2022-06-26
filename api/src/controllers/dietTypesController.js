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
];

async function preload() {
	const mapDiets = diets.forEach(async (element) => {
		await Diet.findOrCreate({
			where: { name: element },
		});
	});

	const allDiets1 = await Diet.findAll();
	const allDiets = allDiets1.flat();
	return allDiets;
}

module.exports = {
	preload,
};
