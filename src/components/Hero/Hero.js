import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies } from "../../store/moviesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { fetchDetails } from "../../store/moviesSlice";

import "./Hero.scss";

const Hero = () => {
	const dispatch = useDispatch();

	const onToggleDetails = (id) => {
		const getDetails = (id) => {
			dispatch(fetchDetails( id));
		};
		return getDetails;
	};
	const baseImgUrl = "https://image.tmdb.org/t/p/w1280";
	const moviesSelector = useSelector(selectMovies);
	const topMovie = moviesSelector.topMovie;
	return (
		<div className="hero">
			<div className="gradient"></div>
			<div className="banner-img">
				<img src={`${baseImgUrl}${topMovie.backdrop_path}`} alt="" />
			</div>
			<div className="hero-info">
				<div className="title text-shadow-big">{topMovie.title}</div>
				<div className="plot text-shadow-big">{topMovie.overview}</div>
				<button onClick={onToggleDetails(topMovie.id)}><FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
			</div>
		</div>
	);
};

export default Hero;
