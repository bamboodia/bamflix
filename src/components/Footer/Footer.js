import React from "react";
import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer split-vert">
			<div className="">BAMFLIX</div>
			<div className="tmdb"><p>Data provided by</p>
			<a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></a></div>
		</div>
	);
};

export default Footer;
