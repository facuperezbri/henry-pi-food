import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipe } from "../store/actions";
import style from "./search.module.css";

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

	return (
		<div className={style.container}>
			<form onSubmit={onSubmit}>
				<input
					className={style.input}
					onChange={handleOnChange}
					type='text'
					placeholder=' Search your recipe'
				/>
				<button className={style.button}>Search</button>
			</form>
		</div>
	);
}
