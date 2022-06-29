import React from "react";

import "./navBar.css";

import henryLogo from "../assets/logo-white.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function NavBar() {
	return (
		<nav>
			<div>
				<img className='henryLogo' src={henryLogo} alt='Henry logo' />
			</div>
			<ul>
				<li>
					<a
						href='https://www.linkedin.com/in/facuperezbri/'
						target='_blank'
						rel='noreferrer'
					>
						<img className='socialLogo' src={linkedin} alt='Linkedin link' />
					</a>
				</li>
				<li>
					<a
						href='https://github.com/facuperezbri'
						target='_blank'
						rel='noreferrer'
					>
						<img className='socialLogo' src={github} alt='Linkedin link' />
					</a>
				</li>
			</ul>
		</nav>
	);
}
