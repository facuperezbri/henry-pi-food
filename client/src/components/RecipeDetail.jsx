import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../redux/actions";
import style from "./recipeDetail.module.css";
import { Link } from "react-router-dom";

export default function RecipeDetail(props) {
	const recipeDetail = useSelector((state) => state.recipeDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRecipeDetail(props.match.params.id));
	}, [dispatch, props.match.params.id]);

	return (
		<div className={style.container}>
			<h2>{recipeDetail.name}</h2>
			{recipeDetail.image ? (
				<div className={style.imgContainer}>
					<img src={recipeDetail.image} alt='imagen' />
				</div>
			) : null}

			<h3>{recipeDetail.summary ? "Summary" : null}</h3>
			<div dangerouslySetInnerHTML={{ __html: recipeDetail.summary }} />
			<h3>{recipeDetail.steps ? "Step by step" : null}</h3>
			<ol>
				{recipeDetail.steps?.map((r) => (
					<li key={r}>{r}</li>
				))}
			</ol>
			{recipeDetail.healthScore}
			<Link to='/home'>
				<button>Go Back</button>
			</Link>
		</div>
	);
}
