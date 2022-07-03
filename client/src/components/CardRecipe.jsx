import React from "react";
import { Link } from "react-router-dom";
import style from "./cardRecipe.module.css";
import score from "../assets/score.png";

export default function CardRecipe({ image, name, diets, healthScore, id }) {
	return (
		<Link to={`/home/${id}`}>
			<div className={style.cardContainer}>
				<img className={style.imageRecipe} src={image} alt={name} />
				<div className={style.textContainer}>
					<h2> {name}</h2>
					<h4 className={style.dietTitle}>Diet Types</h4>
					<ul className={style.dietContainer}>
						{diets.map((d, i) => {
							return <li key={i}>{d}</li>;
						})}
					</ul>
					<div className={style.scoreContainer}>
						<img className={style.scoreImg} src={score} alt='Score' />
						<p>{`${healthScore}`}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
