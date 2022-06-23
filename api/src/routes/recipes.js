const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { getAllRecipes } = require("../controllers/recipesControllers");

router.get("/", async (req, res, next) => {
	const { name } = req.query;

	try {
		const allRecipes = await getAllRecipes();
		res.send(allRecipes);
	} catch (error) {
		next(error);
	}
});

router.get("/:idReceta", (req, res, next) => {
	const { idReceta } = req.params;
	res.send(`Hola, soy ${idReceta} de req.params`);
});

router.post("/", async (req, res, next) => {
	const { name, summary, healthScore, steps } = req.body;
	try {
		let newRecipe = await Recipe.create({
			name,
			summary,
			healthScore,
			steps,
		});
		res.status(201).send(newRecipe);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
