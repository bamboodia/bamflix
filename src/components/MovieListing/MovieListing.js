import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../store/moviesSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = (props) => {
	const selectedMovies = useSelector(selectMovies);

	const getPlot = (index) => {};

	return (
		<div className="movie-listing">
			<section id="section1">
				<a href="#section3" className="arrow__btn left-arrow">
					‹
				</a>
				{selectedMovies.slice(0, 5).map((movie, index) => (
					<MovieCard key={movie.imdbID} movie={movie} getPlot={getPlot(index)} index={index} />
				))}
				<a href="#section2" class="arrow__btn right-arrow">›</a>
			</section>
			<section id="section2">
				<a href="#section1" className="arrow__btn left-arrow">
					‹
				</a>
				{selectedMovies.slice(5, 10).map((movie, index) => (
					<MovieCard key={movie.imdbID} movie={movie} getPlot={getPlot(index)} index={index} />
				))}
				<a href="#section3" class="arrow__btn right-arrow">›</a>
			</section>
			<section id="section3">
				<a href="#section2" className="arrow__btn left-arrow">
					‹
				</a>
				{selectedMovies.slice(10, 15).map((movie, index) => (
					<MovieCard key={movie.imdbID} movie={movie} getPlot={getPlot(index)} index={index} />
				))}
				<a href="#section1" class="arrow__btn right-arrow">›</a>
			</section>
		</div>
	);
};

export default MovieListing;
