import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../store/actions";
import style from "./recipeDetail.module.css";

export default function RecipeDetail(props) {
	const recipeDetail = useSelector((state) => state.recipeDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRecipeDetail(props.match.params.id));
	}, []);

	return (
		<div className={style.container}>
			<h2>{recipeDetail.name}</h2>
			<div className={style.imgContainer}>
				<img src={recipeDetail.image} alt='imagen' />
			</div>
			{recipeDetail.healthScore}
		</div>
	);
}
