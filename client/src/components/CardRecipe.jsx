import React from "react";
import "./cardRecipe.css";
import { Link } from "react-router-dom";

export default function CardRecipe({ image, name, diets, healthScore, id }) {
	return (
		<Link to={`/home/${id}`}>
			<div className='cardContainer'>
				<img className='imageRecipe' src={image} alt={name} />
				<div className='textContainer'>
					<h2> {name}</h2>
					<ul className='dietContainer'>
						{diets.map((d) => {
							return <li>{d}</li>;
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
