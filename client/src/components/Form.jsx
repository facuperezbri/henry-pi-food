import React, { useState, useEffect } from "react";
import { createRecipe } from "../redux/actions";
import style from "./form.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDiets } from "../redux/actions";

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
			errorsHandler.name = "Your recipe must have a name";
		}
		if (!/^[a-zA-Z\s]*$/.test(input.name)) {
			errorsHandler.name = "Name recipe must only have letters";
		}
		if (!input.summary) {
			errorsHandler.summary = "You must explain your recipe";
		}
		if (!input.healthScore) {
			errorsHandler.healthScore = "Please enter a value between 1 and 100";
		}
		if (
			!/^[0-9_-]{1,3}$/.test(input.healthScore) ||
			input.healthScore < 1 ||
			input.healthScore > 100
		) {
			errorsHandler.healthScore = "You must enter a number between 1 and 100";
		}
		if (input.steps.length === 0) {
			errorsHandler.steps = "Please enter the steps of your";
		}
		if (!input.image) {
			errorsHandler.image = "You must complete this field";
		}
		if (
			!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
				input.image
			)
		) {
			errorsHandler.image = "This must an url";
		}
		if (!input.readyInMinutes) {
			errorsHandler.readyInMinutes =
				"You must enter a in how many minutes is ready";
		}
		if (input.diets.length === 0) {
			errorsHandler.diets = "You must at least choose one type of diet";
		}
		return errorsHandler;
	}

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDiets());
	}, []);
	let diets = useSelector((state) => state.diets);

	const [state, setState] = useState({
		name: null,
		summary: null,
		healthScore: null,
		steps: [],
		image: null,
		readyInMinutes: null,
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
			name: null,
			summary: null,
			healthScore: null,
			steps: [],
			image: null,
			readyInMinutes: null,
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
		alert("Your recipe was succesfully created");
	}

	function handleDelete(e, d) {
		e.preventDefault();
		setState({
			...state,
			diets: state.diets.filter((diet) => diet !== d),
		});
	}

	function clear() {
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
				{errors.name ? (
					<h4 className={style.errors}>{errors.name}</h4>
				) : (
					<h4 className={style.hidden}>Ok</h4>
				)}
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
				{errors.summary ? (
					<h4 className={style.errors}>{errors.summary}</h4>
				) : (
					<h4 className={style.hidden}>Ok</h4>
				)}
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
				{errors.healthScore ? (
					<h4 className={style.errors}>{errors.healthScore}</h4>
				) : (
					<h4 className={style.hidden}>Ok</h4>
				)}
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

				{errors.steps ? (
					<h4 className={style.errors}>{errors.steps}</h4>
				) : (
					<h4 className={style.hidden}>Ok</h4>
				)}
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
				{errors.image ? (
					<h4 className={style.errors}>{errors.image}</h4>
				) : (
					<h4 className={style.hidden}>Ok</h4>
				)}
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
				{errors.readyInMinutes ? (
					<h4 className={style.errors}>{errors.readyInMinutes}</h4>
				) : (
					<h4 className={style.hidden}>Ok</h4>
				)}
				{/*--------------------------------------------------------------- */}
				<label htmlFor='diets'>Diets</label>
				<select name='diets' id='diets' onChange={handleOnChange}>
					<option selected={true} disabled={true}>
						Select your diet...
					</option>
					{diets.map((d) => (
						<option key={d.id} value={d.name}>
							{d.name}
						</option>
					))}
				</select>
				<ul className={style.dietsTypesList}>
					{state.diets.map((d) => (
						<li>
							<span>{d}</span>
							<button
								className={style.deleteButton}
								onClick={(e) => handleDelete(e, d)}
							>
								x
							</button>
						</li>
					))}
				</ul>
				{errors.diets ? <h4 className={style.errors}>{errors.diets}</h4> : null}
				<div className={style.buttonContainer}>
					{state.diets.length === 0 ||
					errors.name ||
					errors.image ||
					errors.summary ||
					errors.healthScore ||
					errors.steps ||
					!state.name ||
					!state.image ||
					!state.summary ||
					!state.healthScore ||
					!state.steps ? (
						<button
							type='submit'
							className={style.buttonDisabled}
							disabled={true}
						>
							Create
						</button>
					) : (
						<button type='submit' className={style.button}>
							Create
						</button>
					)}
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
