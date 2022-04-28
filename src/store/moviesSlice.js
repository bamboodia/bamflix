import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../common/apis/movieApi";

const initialState = {
	movies: [],
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
	},
});

export const { getMoviesLoading, getMoviesFailed, setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMovies = (searchTerm) => async (dispatch) => {
	try {
		dispatch(getMoviesLoading());
		const moviesPageOne = await fetchMovies(searchTerm, 1);
		const moviesPageTwo = await fetchMovies(searchTerm, 2);
		const movies = moviesPageOne.concat(moviesPageTwo);
		const moviesWithData = movies.map((movie) => ({
			...movie,
			showingPlot: false,
			Plot: "",
			loadingPlot: false,
			errorPlot: false,
		}));
		const verified = moviesWithData.filter((movie) => movie.backdrop_path !== null);
		dispatch(setMovies(verified));
	} catch (err) {
		dispatch(getMoviesFailed());
	}
};

export const selectMovies = (state) => state.movies.movies;
