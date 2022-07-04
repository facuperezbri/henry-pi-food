require("dotenv").config();
const axios = require("axios");
const db = require("../db");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

let apiURL2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
let apiURL = `https://apimocha.com/facurecipes/recipes`;

const getApiRecipe = async () => {
	const apiPromisedData = await axios.get(apiURL);
	const apiData = await apiPromisedData.data.results.map((r) => {
		return {
			id: r.id,
			name: r.title,
			summary: r.summary,
			dishTypes: r.dishTypes?.map((d) => d),
			diets: r.diets.map((d) => d),
			healthScore: r.healthScore,
			steps: r.analyzedInstructions[0]?.steps?.map((s) => s.step),
			image: r.image,
			readyInMinutes: r.readyInMinutes,
		};
	});
	return apiData;
};

const getDBRecipe = async () => {
	let dbData = await Recipe.findAll({
		include: {
			model: Diet,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
		order: [["name", "ASC"]],
	});
	let dbDataFinal = dbData.map((e) => {
		return {
			id: e.dataValues.id,
			name: e.dataValues.name,
			healthScore: e.dataValues.healthScore,
			steps: e.dataValues.steps,
			image: e.dataValues.image,
			readyInMinutes: e.dataValues.readyInMinutes,
			diets: e.dataValues.diets.map((d) => d.name),
		};
	});
	return dbDataFinal;
};

const getAllRecipes = async () => {
	const apiData = await getApiRecipe();
	const dbData = await getDBRecipe();
	const allRecipes = [...apiData, ...dbData];
	return allRecipes;
};

module.exports = {
	getAllRecipes,
};
