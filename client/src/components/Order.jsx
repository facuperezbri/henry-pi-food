import React from "react";
import { sortByName, sortByHealthScore } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Order() {
	const dispatch = useDispatch();
	function onSelectChange(e) {
		if (e.target.value === "az" || e.target.value === "za")
			dispatch(sortByName(e.target.value));

		if (e.target.value === "09" || e.target.value === "90")
			dispatch(sortByHealthScore(e.target.value));
	}
	return (
		<div>
			<select name='alphOrder' onChange={onSelectChange}>
				<option value='az'>A-Z</option>
				<option value='za'>Z-A</option>
			</select>
			<select name='healthOrder' onChange={onSelectChange}>
				<option value='09'>Ascending Health Score</option>
				<option value='90'>Descending Health Score</option>
			</select>
		</div>
	);
}
