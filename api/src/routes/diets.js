const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");

router.get("/", async (req, res, next) => {
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
	try {
		diets.forEach((d) => {
			Diet.findOrCreate({
				where: {
					name: d,
				},
			});
		});

		const allDiets = await Diet.findAll();
		res.send(allDiets);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
