import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieSlider from '../../common/MovieSlider'
import { getMovies } from "../../store/moviesSlice";
import "./Home.scss";

const Home = () => {
	const options = useSelector((state) => state.options);
	const { searchTerm, genres, type } = options;
	const selectedMovies = useSelector((state) => state.movies);
	console.log(selectedMovies)
	const { isLoading, error, movies } = selectedMovies;
	const dispatch = useDispatch();
		

	useEffect(() => {
		dispatch(getMovies(searchTerm));
	}, [dispatch, searchTerm]);

	

	if (isLoading) {
		return <div className="">Loading</div>;
	}

	if (error) {
		return (
			<div className="error">
				<h2>Failed to load movies.</h2>
				<button type="button" onClick={() => dispatch(getMovies(searchTerm))}>
					Try again
				</button>
			</div>
		);
	}

	return (
		<div id="main" className="main">			
			<div className="sliders">
			<MovieSlider />			
			</div>
		</div>
	);
};

export default Home;
