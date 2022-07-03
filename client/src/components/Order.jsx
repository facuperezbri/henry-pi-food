import React from "react";
import { sortByName, sortByHealthScore, filterBy } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./order.module.css";

export default function Order() {
	const dispatch = useDispatch();
	let diets = useSelector((state) => state.diets);
	diets.sort((a, b) =>
		a.name < b.name ? -1 : a.name < b.name ? -1 : +(a.name > b.name)
	);
	function onSelectChange(e) {
		if (e.target.value === "az" || e.target.value === "za")
			dispatch(sortByName(e.target.value));
		else if (e.target.value === "09" || e.target.value === "90")
			dispatch(sortByHealthScore(e.target.value));
		else {
			dispatch(filterBy(e.target.value));
		}
	}
	return (
		<div className={style.container}>
			<select name='alphOrder' onChange={onSelectChange}>
				<option value='azAll'>Order by name...</option>
				<option value='az'>A-Z</option>
				<option value='za'>Z-A</option>
			</select>
			<select name='healthOrder' onChange={onSelectChange}>
				<option value='09all'>Order by health score...</option>
				<option value='09'>Ascending Health Score</option>
				<option value='90'>Descending Health Score</option>
			</select>
			<select onChange={onSelectChange}>
				<option>Filter by diet type...</option>
				{diets?.map((d) => (
					<option>{d.name}</option>
				))}
			</select>
		</div>
	);
}
