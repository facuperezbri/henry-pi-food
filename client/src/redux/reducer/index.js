import {
	GET_DIETS,
	GET_RECIPES,
	GET_RECIPE_DETAIL,
	SEARCH_RECIPE,
	SORT_BY_HS,
	SORT_BY_NAME,
} from "../actions/actionTypes";

const initialState = {
	recipes: [],
	diets: [],
	recipeDetail: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
			};
		case GET_DIETS:
			return {
				...state,
				diets: action.payload,
			};
		case GET_RECIPE_DETAIL:
			return {
				...state,
				recipeDetail: action.payload,
			};
		case SEARCH_RECIPE:
			return {
				...state,
				recipes: action.payload,
			};
		case SORT_BY_NAME:
			let orderedRecipes = [...state.recipes];
			if (action.payload === "azAll") return state.recipes;
			orderedRecipes.sort((a, b) => {
				if (a.name < b.name) {
					return action.payload === "az" ? -1 : 1;
				}
				if (a.name > b.name) {
					return action.payload === "za" ? -1 : 1;
				}
			});
			return {
				...state,
				recipes: orderedRecipes,
			};
		case SORT_BY_HS:
			let orderedRecipesHS = [...state.recipes];
			orderedRecipesHS.sort((a, b) => {
				if (a.healthScore < b.healthScore) {
					return action.payload === "09" ? -1 : 1;
				}
				if (a.healthScore > b.healthScore) {
					return action.payload === "90" ? -1 : 1;
				}
			});
			return { ...state, recipes: orderedRecipesHS };
		default:
			return state;
	}
}
