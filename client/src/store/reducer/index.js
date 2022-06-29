import { GET_DIETS, GET_RECIPES } from "../actions/actionTypes";

const initialState = {
	recipes: [],
	diets: [],
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
		default:
			return state;
	}
}
