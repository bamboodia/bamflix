import React from "react";
import "./MovieCard.scss";

const MovieCard = (props) => {
	const { movie } = props;
	const baseImgUrl = "https://image.tmdb.org/t/p/w500";
	const imgUrl = `${baseImgUrl}${movie.backdrop_path}`;	

	return (
		<div className="movie-card">
			<div className="">
				<img src={imgUrl} alt={movie.Title} />
			</div>
		</div>
	);
};

export default MovieCard;
