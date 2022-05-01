import { createSlice } from "@reduxjs/toolkit";
import { fetchHotMovies, fetchMovieDetails, fetchNewMovies, fetchCast } from "../common/apis/movieApi";

const initialState = {
	movies: { hotMovies: [[]], newMovies: [[]] },
	details: {},
	showingDetails: false,
	movieDetailsFailed: false,
	movieDetailsLoading: false,
	error: false,
	isLoading: false,
};

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		getMoviesLoading(state) {
			state.isLoading = true;
			state.error = false;
		},
		getMoviesFailed(state) {
			state.isLoading = false;
			state.error = true;
		},
		setMovies: (state, action) => {
			state.isLoading = false;
			state.error = false;
			state.movies = action.payload;
		},
		toggleMovieDetails: (state, action) => {
			state.showingDetails = !state.showingDetails;
		},
		getMovieDetailsLoading: (state) => {
			state.movieDetailsFailed = false;
			state.movieDetailsLoading = true;
		},
		setMovieDetails: (state, action) => {
			state.movieDetailsFailed = false;
			state.movieDetailsLoading = false;
			state.details = action.payload.movieDetails;
		},
		getMovieDetailsFailed: (state) => {
			state.movieDetailsFailed = true;
			state.movieDetailsLoading = false;
		},
		closeModal: (state, action) => {
			state.showingDetails = false;
		},
	},
});

export const { getMoviesLoading, getMoviesFailed, setMovies, getMovieDetailsLoading, setMovieDetails, getMovieDetailsFailed, setNewMovies, toggleMovieDetails, closeModal } = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMovies = () => async (dispatch) => {
	try {
		dispatch(getMoviesLoading());
		const movies = { hotMovies: [], newMovies: [] };
		const hotMovies = await fetchHotMovies(1);
		const hotMoviesValid = hotMovies.filter((movie) => movie.backdrop_path !== null);
		const newMovies = await fetchNewMovies();
		const newMoviesValid = newMovies.filter((movie) => movie.backdrop_path !== null);
		movies.hotMovies.push(hotMoviesValid);
		movies.newMovies.push(newMoviesValid);
		dispatch(setMovies(movies));
	} catch (err) {
		console.log(err);
		dispatch(getMoviesFailed());
	}
};

export const fetchDetails = (index, id) => async (dispatch) => {
	try {
		dispatch(getMovieDetailsLoading());
		const movieDetails = await fetchMovieDetails(id);
		const movieCast = await fetchCast(id);
		console.log(movieCast);		
		dispatch(setMovieDetails({ movieDetails }));
		dispatch(toggleMovieDetails());
	} catch (err) {
		console.log(err);
		dispatch(getMovieDetailsFailed());
	}
};

export const selectMovies = (state) => state.movies;
