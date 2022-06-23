require("dotenv").config();
const axios = require("axios");
const db = require("../db");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

let apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

const getApiRecipe = async () => {
	const apiPromisedData = await axios.get(apiURL);
	const apiData = await apiPromisedData.data.results.map((r) => {
		return {
			id: r.id,
			name: r.title,
			summary: r.summary,
			healthScore: r.healthScore,
			steps: r.analyzedInstructions,
			image: r.image,
			diets: r.diets,
		};
	});
	return apiData;
};

const getDBRecipe = async () => {
	let dbData = await Recipe.findAll({
		include: Diet,
	});
	return dbData;
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
