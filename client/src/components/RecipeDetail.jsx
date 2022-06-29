import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../store/actions";

export default function RecipeDetail(props) {
	const recipeDetail = useSelector((state) => state.recipeDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRecipeDetail(props.match.params.id));
	}, []);

	return (
		<div>
			{recipeDetail.name}
			{recipeDetail.healthScore}
			<button onclick={window.history.back()}>Go Back</button>
		</div>
	);
}
