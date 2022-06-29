import axios from "axios";
import { GET_RECIPES, GET_DIETS } from "./actionTypes";

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
