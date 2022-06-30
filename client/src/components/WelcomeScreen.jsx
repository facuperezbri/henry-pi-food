import React from "react";
import { Link } from "react-router-dom";

// images

import logo from "../assets/logo-white.png";
import mainImg from "../assets/main-img.png";

// css

import "./welcomeScreen.css";

export default function WelcomeScreen() {
	return (
		<div>
			<div className='mainContainer'>
				<div className='textButtonContainer'>
					<h1>
						It's not just Food, it's an <span>Experience</span>
					</h1>
					<Link to='/home'>
						<button>Let's cook</button>
					</Link>
				</div>
				<div>
					<img className='mainImg' src={mainImg} alt='Food plate' />
				</div>
			</div>
		</div>
	);
}