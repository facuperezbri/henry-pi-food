require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const db = require("../db");

let apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

router.get("/", async (req, res, next) => {
	const { name } = req.query;

	try {
		let apiPromiseData = await axios.get(apiURL);
		let dbPromiseData = await Recipe.findAll({
			include: Diet,
		});

		Promise.all([apiPromiseData, dbPromiseData]).then((respuesta) => {
			const [apiPromisedData, dbData] = respuesta;
			let apiData = apiPromisedData.data.results.map((r) => {
				return {
					id: r.id,
					name: r.title,
					summary: r.summary,
					healthScore: r.healthScore,
					steps: r.analyzedInstructions,
					image: r.image,
				};
			});
			let allData = [...apiData, ...dbData];
			res.send(allData);
		});
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
