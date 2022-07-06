import React, { useState } from "react";
import { createRecipe } from "../redux/actions";
import style from "./form.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Form() {
	const [errors, setErrors] = useState({
		name: true,
		summary: true,
		healthScore: true,
		steps: true,
		image: true,
		readyInMinutes: true,
		diets: true,
	});

	function validate(input) {
		let errorsHandler = {};
		if (!input.name) {
			errorsHandler.name = "a";
		}
		if (!input.summary) {
			errorsHandler.summary = "b";
		}
		if (!input.healthScore) {
			errorsHandler.healthScore = "c";
		}
		if (input.steps.length === 0) {
			errorsHandler.steps = "d";
		}
		if (!input.image) {
			errorsHandler.image = "e";
		}
		if (!input.readyInMinutes) {
			errorsHandler.readyInMinutes = "f";
		}
		if (input.diets.length === 0) {
			errorsHandler.diets = "g";
		}
		return errorsHandler;
	}

	let diets = useSelector((state) => state.diets);

	const [state, setState] = useState({
		name: "",
		summary: "",
		healthScore: 1,
		steps: [],
		image: "",
		readyInMinutes: 1,
		diets: [],
	});

	function handleOnChange(e) {
		e.preventDefault();

		setState({ ...state, [e.target.name]: e.target.value });
		if (e.target.name === "steps") {
			setState({ ...state, steps: [e.target.value] });
		}
		if (e.target.name === "diets") {
			setState({
				...state,
				diets: [...new Set([...state.diets, e.target.value])],
			});
		}
		setErrors(
			validate({
				...state,
				[e.target.name]: e.target.value,
			})
		);
	}

	function handleOnSubmit(e) {
		e.preventDefault();
		createRecipe(state);
		setState({
			name: "",
			summary: "",
			healthScore: 1,
			steps: [],
			image: "",
			readyInMinutes: 1,
			diets: [],
		});
		setErrors({
			name: true,
			summary: true,
			healthScore: true,
			steps: true,
			image: true,
			readyInMinutes: true,
			diets: true,
		});
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
					value={state.name}
					id='name'
					onChange={handleOnChange}
				/>
				{errors.name ? <h3>Tenés que ingresar el nombre</h3> : null}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='summary'>Summary</label>
				<input
					key='summary'
					type='text'
					name='summary'
					value={state.summary}
					id='summary'
					onChange={handleOnChange}
				/>
				{errors.summary ? <h3>Tenés que ingresar el summary</h3> : null}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='healthScore'>Health Score</label>
				<input
					key='healthScore'
					type='number'
					min='1'
					max='100'
					name='healthScore'
					value={state.healthScore}
					id='healthScore'
					onChange={handleOnChange}
				/>
				{errors.healthScore ? <h3>Tenés que ingresar el score</h3> : null}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='steps'>Steps</label>
				<input
					key='steps'
					type='text'
					name='steps'
					value={state.steps}
					id='steps'
					onChange={handleOnChange}
				/>
				{errors.steps ? <h3>Tenés que ingresar el steps</h3> : null}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='image'>Image</label>
				<input
					ket='image'
					type='text'
					name='image'
					value={state.image}
					id='image'
					onChange={handleOnChange}
				/>
				{errors.image ? <h3>Tenés que ingresar el image</h3> : null}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='readyInMinutes'>Ready in minutes</label>
				<input
					key='readyInMinutes'
					type='number'
					min={1}
					name='readyInMinutes'
					value={state.readyInMinutes}
					id='readyInMinutes'
					onChange={handleOnChange}
				/>
				{errors.readyInMinutes ? <h3>Tenés que ingresar el ready</h3> : null}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='diets'>Diets</label>
				<select name='diets' id='diets' onChange={handleOnChange}>
					<option selected={true} disabled={true}>
						Select your diet...
					</option>
					{diets.map((d) => (
						<option value={d.name}>{d.name}</option>
					))}
				</select>
				<ul>
					{state.diets.map((d) => (
						<li>{d}</li>
					))}
				</ul>
				{errors.diets ? <h3>Tenés que ingresar el diet</h3> : null}
				<div className={style.buttonContainer}>
					<button type='submit' className={style.button}>
						Create
					</button>
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
