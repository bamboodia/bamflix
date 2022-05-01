import { createSlice } from "@reduxjs/toolkit";
import { fetchHotMovies, fetchMovieDetails, fetchNewMovies } from "../common/apis/movieApi";

const initialState = {
	movies: { hotMovies: [[]], newMovies: [[]] },
	details: {},
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
			state.hotMovies[action.payload].showingDetails = !state.hotMovies[action.payload].showingDetails;
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
	},
});

export const { getMoviesLoading, getMoviesFailed, setMovies, getMovieDetailsLoading, setMovieDetails, getMovieDetailsFailed, setNewMovies, toggleMovieDetails } = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMovies = () => async (dispatch) => {
	try {
		dispatch(getMoviesLoading());
		const movies = { hotMovies: [], newMovies: [] };
		const hotMovies = await fetchHotMovies(1);
		const hotMoviesWithData = hotMovies.map((movie) => ({
			...movie,
			showingDetails: false,
			loadingDetails: false,
			errorDetails: false,
		}));
		const hotMoviesValid = hotMoviesWithData.filter((movie) => movie.backdrop_path !== null);
		const newMovies = await fetchNewMovies();
		const newMoviesWithData = newMovies.map((movie) => ({
			...movie,
			showingDetails: false,
			loadingDetails: false,
			errorDetails: false,
		}));
		const newMoviesValid = newMoviesWithData.filter((movie) => movie.backdrop_path !== null);
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
		dispatch(getMovieDetailsLoading(index))
		const movieDetails = await fetchMovieDetails(id);
		console.log(movieDetails);
		dispatch(setMovieDetails({index, movieDetails}));
	} catch (err) {
		console.log(err);
	}
};

export const selectMovies = (state) => state.movies;
