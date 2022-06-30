import React from "react";
import { Link } from "react-router-dom";

// images

import mainImg from "../assets/main-img.png";

// css

import style from "./welcomeScreen.module.css";

export default function WelcomeScreen() {
	return (
		<div>
			<div className={style.mainContainer}>
				<div className={style.textButtonContainer}>
					<h1>
						It's not just Food, it's an <span>Experience</span>
					</h1>
					<Link to='/home'>
						<button className={style.button}>Let's cook</button>
					</Link>
				</div>
				<div>
					<img className={style.mainImg} src={mainImg} alt='Food plate' />
				</div>
			</div>
		</div>
	);
}
