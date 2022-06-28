import axios from "axios";
import { GET_RECIPES } from "./actionTypes";

export function getRecipes() {
	return async function (dispatch) {
		const allRecipes = await axios.get("http://localhost:3001/recipes");
		return dispatch({ type: GET_RECIPES, payload: allRecipes.data });
	};
}
