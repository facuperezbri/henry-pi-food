import React from "react";
import { Link } from "react-router-dom";
import style from "./cardRecipe.module.css";

export default function CardRecipe({ image, name, diets, healthScore, id }) {
	return (
		<Link to={`/home/${id}`}>
			<div className={style.cardContainer}>
				<img className={style.imageRecipe} src={image} alt={name} />
				<div className={style.textContainer}>
					<h2> {name}</h2>
					<ul className={style.dietContainer}>
						{diets.map((d, i) => {
							return <li key={i}>{d}</li>;
						})}
					</ul>
				</div>
				<div>
					<p>{`Health Score  ${healthScore}`}</p>
				</div>
			</div>
		</Link>
	);
}
