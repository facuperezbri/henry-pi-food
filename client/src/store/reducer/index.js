import {
	GET_DIETS,
	GET_RECIPES,
	GET_RECIPE_DETAIL,
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
		default:
			return state;
	}
}
