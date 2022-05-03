import React from "react";
import { useSelector } from "react-redux";
import { MovieSlider, TVSlider } from "../../common/Sliders";
import { selectMovies } from "../../store/moviesSlice";
import "./Home.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Hero from "../Hero/Hero";

export const Home = () => {
	const selectedMovies = useSelector(selectMovies);
	const { isLoading, showingDetails } = selectedMovies;

	const displayModal = () => {
		if (showingDetails) {
			return <Modal />;
		}
	};

	const loading = () => {
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
	};

	return (
		<div className="app-container">
			{displayModal()}
			<Header />
			<Hero />
			<div id="main" className="main">
				<div className="sliders">
					{loading()}
					<MovieSlider movies={selectedMovies.movies.hotMovies} title={"Top Movies"} />
					<TVSlider movies={selectedMovies.tvShows.hotTV} title={"Top TV"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export const Films = () => {
	const selectedMovies = useSelector(selectMovies);
	const { isLoading, showingDetails } = selectedMovies;

	const displayModal = () => {
		if (showingDetails) {
			return <Modal />;
		}
	};

	const loading = () => {
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
	};

	return (
		<div className="app-container">
			{displayModal()}
			<Header />
			<Hero />
			<div id="main" className="main">
				<div className="sliders">
					{loading()}
					<MovieSlider movies={selectedMovies.movies.hotMovies} title={"Top Movies"} />
					<MovieSlider movies={selectedMovies.movies.newMovies} title={"New Movies"} />
					<MovieSlider movies={selectedMovies.movies.family} title={"Family Movies"} />
					<MovieSlider movies={selectedMovies.movies.action} title={"Action Movies"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export const TV = () => {
	const selectedMovies = useSelector(selectMovies);
	const { isLoading, showingDetails } = selectedMovies;

	const displayModal = () => {
		if (showingDetails) {
			return <Modal />;
		}
	};

	const loading = () => {
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
	};

	return (
		<div className="app-container">
			{displayModal()}
			<Header />
			<Hero />
			<div id="main" className="main">
				<div className="sliders">
					{loading()}
					<TVSlider movies={selectedMovies.tvShows.hotTV} title={"Top TV Shows"} />
					<TVSlider movies={selectedMovies.tvShows.newTV} title={"New TV Shows"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};
