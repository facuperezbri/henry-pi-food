import {
	FILTER_BY,
	GET_DIETS,
	GET_RECIPES,
	GET_RECIPE_DETAIL,
	SEARCH_RECIPE,
	SORT_BY_HS,
	SORT_BY_NAME,
	FILTER_20_40,
} from "../actions/actionTypes";

const initialState = {
	recipes: [],
	filteredRecipes: [],
	diets: [],
	recipeDetail: [],
	searchRecipeState: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
				filteredRecipes: action.payload,
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
				filteredRecipes: action.payload,
				searchRecipeState: action.payload,
			};
		case SORT_BY_NAME:
			let orderedRecipes = [...state.filteredRecipes];
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
				filteredRecipes: orderedRecipes,
			};
		case SORT_BY_HS:
			let orderedRecipesHS = [...state.filteredRecipes];
			orderedRecipesHS.sort((a, b) => {
				if (a.healthScore < b.healthScore) {
					return action.payload === "09" ? -1 : 1;
				}
				if (a.healthScore > b.healthScore) {
					return action.payload === "90" ? -1 : 1;
				}
			});
			return { ...state, filteredRecipes: orderedRecipesHS };
		case FILTER_BY:
			let stateRecipes = [...state.recipes];
			if (action.payload === "allDiets") {
				return { ...state, filteredRecipes: stateRecipes };
			}
			if (
				state.searchRecipeState.length !== 0 &&
				state.recipes.length !== state.searchRecipeState.length
			) {
				return {
					...state,
					filteredRecipes: state.searchRecipeState.filter((type) =>
						type.diets.includes(action.payload)
					),
				};
			}
			return {
				...state,
				filteredRecipes: state.recipes.filter((type) =>
					type.diets.includes(action.payload)
				),
			};
		case FILTER_20_40:
			if (action.payload === "2040") {
				return {
					...state,
					filteredRecipes: state.recipes.filter(
						(f) => f.healthScore > 20 && f.healthScore < 40
					),
				};
			}
			return { ...state };
		default:
			return state;
	}
}
