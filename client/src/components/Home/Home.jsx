import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../store/actions";

export default function Home() {
	const dispatch = useDispatch();
	const recetasGlobal = useSelector((state) => state.recipes);
	console.log(recetasGlobal);
	useEffect(() => {
		dispatch(getRecipes());
	}, []);
	return <div>Home</div>;
}
