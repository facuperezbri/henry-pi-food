import React from "react";

import henryLogo from "../assets/logo-white.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

import style from "./navBar.module.css";

export default function NavBar() {
	return (
		<nav>
			<div>
				<img className={style.henryLogo} src={henryLogo} alt='Henry logo' />
			</div>
			<ul className={style.ul}>
				<li>
					<a
						href='https://www.linkedin.com/in/facuperezbri/'
						target='_blank'
						rel='noreferrer'
					>
						<img
							className={style.socialLogo}
							src={linkedin}
							alt='Linkedin link'
						/>
					</a>
				</li>
				<li>
					<a
						href='https://github.com/facuperezbri'
						target='_blank'
						rel='noreferrer'
					>
						<img
							className={style.socialLogo}
							src={github}
							alt='Linkedin link'
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
}
