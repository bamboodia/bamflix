import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.svg";
import "./Header.scss";

const Header = () => {
	return (
		<div className="header split">
			<Link to="/">
				{" "}
				<div className="logo">BAMFLIX</div>
			</Link>
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="">Series</a></li>
				<li><a href="">Films</a></li>
				<li><a href="">New & Popular</a></li>
				<li><a href="">My List</a></li>
				<li><a href="">Audio & Subtitles</a></li>
			</ul>
			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};

export default Header;
