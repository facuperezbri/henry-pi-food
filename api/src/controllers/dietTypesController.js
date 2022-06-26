const { Diet } = require("../db");

const diets = [
	"Gluten Free",
	"Ketogenic",
	"Vegetarian",
	"Lacto-Vegetarian",
	"Ovo-Vegetarian",
	"Vegan",
	"Pescetarian",
	"Paleo",
	"Primal",
	"Low FODMAP",
	"Whole30",
];

async function preload() {
	const mapDiets = diets.forEach(async (element) => {
		await Diet.findOrCreate({
			where: { name: element },
		});
	});

	const allDiets = await Diet.findAll();
	return allDiets;
}

module.exports = {
	preload,
};
