import React, { useState } from "react";
import { createRecipe } from "../redux/actions";
import style from "./form.module.css";
import { Link } from "react-router-dom";

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
		if (e.target.name === "steps") {
			setState({ ...state, steps: [e.target.value] });
		}
		if (e.target.name === "diets") {
			setState({ ...state, diets: [e.target.value] });
		}
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

	function validate(input) {
		if (!input.name) return "Your recipe must have a name";
		if (input.healthScore < 1 || input.healthScore > 100)
			return "Your health score must be between 1 and 100";
	}

	return (
		<div className={style.container}>
			<h2>Create your own recipe!</h2>
			<form className={style.form} onSubmit={handleOnSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					key='name'
					type='text'
					name='name'
					id='name'
					onChange={handleOnChange}
				/>
				{/*--------------------------------------------------------------- */}
				<label htmlFor='summary'>Summary</label>
				<input
					key='summary'
					type='text'
					name='summary'
					id='summary'
					onChange={handleOnChange}
				/>
				{/*--------------------------------------------------------------- */}
				<label htmlFor='healthScore'>Health Score</label>
				<input
					key='healthScore'
					type='number'
					min='1'
					max='100'
					name='healthScore'
					id='healthScore'
					onChange={handleOnChange}
				/>
				{/*--------------------------------------------------------------- */}
				<label htmlFor='steps'>Steps</label>
				<input
					key='steps'
					type='text'
					name='steps'
					id='steps'
					onChange={handleOnChange}
				/>

				{/*--------------------------------------------------------------- */}
				<label htmlFor='image'>Image</label>
				<input
					ket='image'
					type='text'
					name='image'
					id='image'
					onChange={handleOnChange}
				/>
				{/*--------------------------------------------------------------- */}
				<label htmlFor='readyInMinutes'>Ready in minutes</label>
				<input
					key='readyInMinutes'
					type='number'
					min={1}
					name='readyInMinutes'
					id='readyInMinutes'
					onChange={handleOnChange}
				/>
				{/*--------------------------------------------------------------- */}
				<label htmlFor='diets'>Diets</label>
				<input
					key='diets'
					type='text'
					name='diets'
					id='diets'
					onChange={handleOnChange}
				/>
				<div className={style.buttonContainer}>
					<button className={style.button}>Create</button>
					<button className={style.button}>Clear</button>
				</div>
				<div className={style.buttonContainer}>
					<Link to='/home'>
						<button className={style.button}>Go back</button>
					</Link>
				</div>
			</form>
		</div>
	);
}
