import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe, getRecipes } from "../redux/actions";
import Order from "./Order";
import style from "./search.module.css";
import { Link } from "react-router-dom";

export default function Search() {
	const dispatch = useDispatch();
	const [valueName, setValueName] = useState("");

	function handleOnChange(e) {
		e.preventDefault();
		setValueName(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		dispatch(searchRecipe(valueName));
	}

	function clearSearch(e) {
		dispatch(getRecipes());
	}

	return (
		<div className={style.container}>
			<Order />
			<form>
				<input
					className={style.input}
					onChange={handleOnChange}
					type='text'
					id='searchInput'
					placeholder=' Search your recipe'
				/>
				<button className={style.button} onClick={onSubmit}>
					Search
				</button>
				<button className={style.button} onClick={clearSearch}>
					Clear
				</button>
			</form>
			<Link to='/create'>
				<button className={style.button}>Create your recipe!</button>
			</Link>
		</div>
	);
}
