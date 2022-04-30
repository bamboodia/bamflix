import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieSlider from "../../common/MovieSlider";
import { getMovies, selectMovies } from "../../store/moviesSlice";
import "./Home.scss";

const Home = () => {
	const options = useSelector((state) => state.options);
	const dispatch = useDispatch();
	const selectedMovies = useSelector(selectMovies);

	const { isLoading } = selectedMovies;

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className="loading">
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}

	return (
		<div id="main" className="main">
			<div className="sliders">
				<MovieSlider movies={selectedMovies.movies.hotMovies} title={"Hot Movies"} />
				<MovieSlider movies={selectedMovies.movies.newMovies} title={"New Movies"} />
			</div>
		</div>
	);
};

export default Home;
