import axios from "axios";
import {
	GET_RECIPES,
	GET_DIETS,
	GET_RECIPE_DETAIL,
	SEARCH_RECIPE,
} from "./actionTypes";

export function getRecipes() {
	return async function (dispatch) {
		const allRecipes = await axios.get("http://localhost:3001/recipes");
		return dispatch({ type: GET_RECIPES, payload: allRecipes.data });
	};
}

export function getDiets() {
	return async function (dispatch) {
		const allDiets = await axios.get("http://localhost:3001/types");
		return dispatch({ type: GET_DIETS, payload: allDiets.data });
	};
}

export function getRecipeDetail(id) {
	return async function (dispatch) {
		const recipeDet = await axios.get(`http://localhost:3001/recipes/${id}`);
		return dispatch({
			type: GET_RECIPE_DETAIL,
			payload: recipeDet.data,
		});
	};
}

export function searchRecipe(name) {
	return async function (dispatch) {
		const searchRecipe = await axios.get(
			`http://localhost:3001/recipes?name=${name}`
		);
		return dispatch({
			type: SEARCH_RECIPE,
			payload: searchRecipe.data,
		});
	};
}
