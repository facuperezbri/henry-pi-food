import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../redux/actions";
import style from "./recipeDetail.module.css";
import { Link } from "react-router-dom";

import score from "../assets/score.png";

export default function RecipeDetail(props) {
	const recipeDetail = useSelector((state) => state.recipeDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRecipeDetail(props.match.params.id));
	}, [dispatch, props.match.params.id]);

	console.log(recipeDetail);

	return (
		<div className={style.container}>
			<h2>{recipeDetail.name}</h2>
			{recipeDetail.image ? (
				<div className={style.imgContainer}>
					<img src={recipeDetail.image} alt='imagen' className={style.image} />
				</div>
			) : null}

			<h3>{recipeDetail.summary ? "Summary" : null}</h3>
			<div
				className={style.summary}
				dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
			/>
			<h3>{recipeDetail.steps ? "Step by step" : null}</h3>
			<ol>
				{recipeDetail.steps?.map((r) => (
					<li key={r}>{r}</li>
				))}
			</ol>
			<h3>{recipeDetail.diets ? "Diets" : null}</h3>
			<ul>
				{recipeDetail.diets?.map((d) => (
					<li>{d}</li>
				))}
			</ul>
			<h3>{recipeDetail.healthScore ? "Health Score" : null}</h3>
			<img className={style.scoreImg} src={score} alt='Score' />
			{recipeDetail.healthScore}
			<Link to='/home'>
				<button className={style.button}>Go Back</button>
			</Link>
		</div>
	);
}
