import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDiets } from "../store/actions";
import RecipesContainer from "./RecipesContainer";

export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDiets());
	}, []);
	return (
		<Fragment>
			<RecipesContainer />
		</Fragment>
	);
}
