import axios from "axios";
import {
	GET_RECIPES,
	GET_DIETS,
	GET_RECIPE_DETAIL,
	SEARCH_RECIPE,
	SORT_BY_NAME,
	SORT_BY_HS,
	FILTER_BY,
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
		const recipeDet = await axios
			.get(`http://localhost:3001/recipes/${id}`)
			.catch((e) => alert(e));

		return dispatch({
			type: GET_RECIPE_DETAIL,
			payload: recipeDet.data,
		});
	};
}

export function searchRecipe(name) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3001/recipes?name=${name}`)
			.then((r) =>
				dispatch({
					type: SEARCH_RECIPE,
					payload: r.data,
				})
			)
			.catch((e) => console.log(e));
	};
}

export function sortByName(order) {
	return {
		type: SORT_BY_NAME,
		payload: order,
	};
}

export function sortByHealthScore(order) {
	return {
		type: SORT_BY_HS,
		payload: order,
	};
}

export function filterBy(diet) {
	return {
		type: FILTER_BY,
		payload: diet,
	};
}

export function createRecipe(state) {
	axios.post("http://localhost:3001/recipes", state);
}
