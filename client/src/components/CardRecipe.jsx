import React from "react";
import "./cardRecipe.css";

export default function CardRecipe({ image, name, diets, healthScore }) {
	return (
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
	);
}
