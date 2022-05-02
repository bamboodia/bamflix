import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.svg";
import "./Header.scss";

const Header = () => {
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
			document.getElementById("header").style.background = "rgb(20,20,20)";
		} else {
			document.getElementById("header").style.background = "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)";
		}
	}

	return (
		<div className="header split" id="header">
			<Link to="/">
				{" "}
				<div className="logo">BAMFLIX</div>
			</Link>
			<ul>				
				<li>
					<Link to="/films">
						<span>Films</span>
					</Link>
				</li>
				<li>
					<Link to="/tv">
						<span>TV</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span>New & Popular</span>
					</Link>
				</li>				
			</ul>
			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};

export default Header;
