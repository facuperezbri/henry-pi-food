import React, { useState } from "react";
import { useEffect } from "react";
import { createRecipe } from "../redux/actions";
import style from "./form.module.css";

export default function Form() {
	const [state, setState] = useState({
		name: "",
		summary: "",
		healthScore: 0,
		steps: [],
		image: "",
		readyInMinutes: 0,
		diets: [],
	});

	function handleOnChange(e) {
		e.preventDefault();
		setState({ ...state, [e.target.name]: e.target.value });
	}

	function handleOnSubmit(e) {
		e.preventDefault();
		createRecipe(state);
		setState({
			name: "",
			summary: "",
			healthScore: 0,
			steps: [],
			image: "",
			readyInMinutes: 0,
			diets: [],
		});
	}

	return (
		<form className={style.form} onSubmit={handleOnSubmit}>
			<label htmlFor='name'>Name</label>
			<input type='text' name='name' id='name' onChange={handleOnChange} />
			{/*--------------------------------------------------------------- */}
			<label htmlFor='summary'>Summary</label>
			<input
				type='text'
				name='summary'
				id='summary'
				onChange={handleOnChange}
			/>
			{/*--------------------------------------------------------------- */}
			<label htmlFor='healthScore'>Health Score</label>
			<input
				type='text'
				name='healthScore'
				id='healthScore'
				onChange={handleOnChange}
			/>
			{/*--------------------------------------------------------------- */}
			<label htmlFor='steps'>Steps</label>
			<input type='text' name='steps' id='steps' onChange={handleOnChange} />

			{/*--------------------------------------------------------------- */}
			<label htmlFor='image'>Image</label>
			<input type='text' name='image' id='image' onChange={handleOnChange} />
			{/*--------------------------------------------------------------- */}
			<label htmlFor='readyInMinutes'>Ready in minutes</label>
			<input
				type='text'
				name='readyInMinutes'
				id='readyInMinutes'
				onChange={handleOnChange}
			/>
			{/*--------------------------------------------------------------- */}
			<label htmlFor='Diets'>Diets</label>
			<input type='text' name='Diets' id='Diets' onChange={handleOnChange} />
		</form>
	);
}
