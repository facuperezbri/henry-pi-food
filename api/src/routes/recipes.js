const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { getAllRecipes } = require("../controllers/recipesControllers");

router.get("/", async (req, res, next) => {
	const { name } = req.query;

	try {
		const allRecipes = await getAllRecipes();
		if (name) {
			let recipeName = allRecipes.filter((r) =>
				r.name.toLowerCase().includes(name.toLowerCase())
			);
			recipeName.length
				? res.status(200).send(recipeName)
				: res.status(404).send("Can't find the recipe you are looking for");
		}
		res.send(allRecipes);
	} catch (error) {
		next(error);
	}
});

router.get("/:idReceta", async (req, res, next) => {
	const { idReceta } = req.params;
	try {
		const allRecipes = await getAllRecipes();
		const paramRecipe = allRecipes.find((r) => r.id.toString() === idReceta);
		if (paramRecipe === undefined)
			res.status(404).send(`Couldn't find id: ${idReceta}`);
		else res.send(paramRecipe);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	const { name, summary, healthScore, steps, diets, image } = req.body;
	try {
		let newRecipe = await Recipe.create({
			name,
			summary,
			healthScore,
			steps,
			image,
		});
		let dietsDB = await Diet.findAll({
			where: {
				name: diets,
			},
		});
		newRecipe.addDiet(dietsDB);
		res.status(201).send(newRecipe);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
