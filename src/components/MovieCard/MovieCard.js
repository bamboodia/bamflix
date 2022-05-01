import React from "react";
import "./MovieCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = (props) => {
	const { movie, onToggleDetails } = props;
	const baseImgUrl = "https://image.tmdb.org/t/p/w500";
	const imgUrl = `${baseImgUrl}${movie.backdrop_path}`;

	return (
		<div className="movie-card" onClick={() => onToggleDetails(movie.id)}>
			<div className="title">{movie.title}</div>
			<div className="">
				<img src={imgUrl} alt={movie.Title} />
			</div>
			<div className="rating">
				<FontAwesomeIcon className="rating-star" icon={faStar} size="xs" />
				{movie.vote_average}
			</div>
		</div>
	);
};

export default MovieCard;
