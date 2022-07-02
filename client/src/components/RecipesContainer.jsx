import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardRecipe from "./CardRecipe";

import { getRecipes } from "../redux/actions";

import style from "./recipesContainer.module.css";

export default function CardRecipes() {
	const dispatch = useDispatch();
	const recetasGlobal = useSelector((state) => state.recipes);

	// Para restablecer paginado en 1 cuando hago Search

	useEffect(() => {
		setCurrentPage(1);
	}, [recetasGlobal]);

	// Paginado

	const [currentPage, setCurrentPage] = useState(1);
	let elementsPage = 9;

	const pages = [];

	for (let i = 1; i < Math.ceil(recetasGlobal.length / elementsPage) + 1; i++) {
		pages.push(i);
	}

	const handleClick = (e) => {
		setCurrentPage(Number(e.target.id));
	};

	const lastItem = currentPage * elementsPage; // 1 * 9
	const firstItem = lastItem - elementsPage; // 0

	const currentItems = recetasGlobal.slice(firstItem, lastItem);

	const showCurrentItems = () => {
		return (
			<div className={style.recipesContainer}>
				{currentItems.map((r, i) => {
					return (
						<div key={i}>
							<CardRecipe
								key={r.id}
								image={r.image}
								name={r.name}
								diets={r.diets}
								healthScore={r.healthScore}
								id={r.id}
								steps={r.steps}
							/>
						</div>
					);
				})}
			</div>
		);
	};

	const pageNumbers = pages.map((p) => {
		return (
			<Fragment>
				<li
					className={p === currentPage ? style.numberPageActive : null}
					onClick={handleClick}
					key={p}
					id={p}
				>
					{p}
				</li>
			</Fragment>
		);
	});

	const buttonNext = () => {
		if (pages.length > currentPage) setCurrentPage(currentPage + 1);
	};

	const buttonPrev = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		dispatch(getRecipes());
	}, []);

	return (
		<div>
			<ul className={style.pagList}>
				<button className={style.prevNextButton} onClick={buttonPrev}>
					Prev
				</button>
				{pageNumbers}
				<button className={style.prevNextButton} onClick={buttonNext}>
					Next
				</button>
			</ul>

			<div>{showCurrentItems()}</div>
			<ul className={style.pagList}>
				<button className={style.prevNextButton} onClick={buttonPrev}>
					Prev
				</button>
				{pageNumbers}
				<button className={style.prevNextButton} onClick={buttonNext}>
					Next
				</button>
			</ul>
		</div>
	);
}
