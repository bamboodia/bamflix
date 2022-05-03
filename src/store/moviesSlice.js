import { createSlice } from "@reduxjs/toolkit";
import { fetchHotMovies, fetchNewMovies, fetchActionMovies, fetchHotTV, fetchMovieDetails, fetchDetailsTV, fetchCast, fetchTVCast, fetchNewTV } from "../common/apis/movieApi";

const initialState = {
	movies: { hotMovies: [[]], newMovies: [[]], action: [[]], adventure: [[]], animation: [[]], comedy: [[]], crime: [[]], documentaries: [[]], drama: [[]], family: [[]], fantasy: [[]], history: [[]], horror: [[]], music: [[]], mystery: [[]], romance: [[]], sci_fi: [[]], thriller: [[]], war: [[]], western: [[]] },
	tvShows: { hotTV: [[]], newTV: [[]] },
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
			state.details = action.payload;
		},
		getMovieDetailsFailed: (state) => {
			state.movieDetailsFailed = true;
			state.movieDetailsLoading = false;
		},
		setTVShows: (state, action) => {
			state.isLoading = false;
			state.error = false;
			state.tvShows = action.payload;
		},
		closeModal: (state, action) => {
			state.showingDetails = false;
		},
	},
});

export const { getMoviesLoading, getMoviesFailed, setMovies, setTVShows, getMovieDetailsLoading, setMovieDetails, getMovieDetailsFailed, setNewMovies, toggleMovieDetails, closeModal } = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMovies = () => async (dispatch) => {
	try {
		dispatch(getMoviesLoading());
		const movies = { hotMovies: [], newMovies: [], action: [], adventure: [], animation: [], comedy: [], crime: [], documentaries: [], drama: [], family: [], fantasy: [], history: [], horror: [], music: [], mystery: [], romance: [], sci_fi: [], thriller: [], war: [], western: [] };
		const hotMovies = await fetchHotMovies();
		const hotMoviesValid = hotMovies.filter((movie) => movie.backdrop_path !== null);
		const newMovies = await fetchNewMovies();
		const newMoviesValid = newMovies.filter((movie) => movie.backdrop_path !== null);
		const actionMovies = await fetchHotMovies(28, 10751);
		const familyMovies = await fetchHotMovies(10751);
		movies.hotMovies.push(hotMoviesValid);
		movies.newMovies.push(newMoviesValid);
		movies.action.push(actionMovies);
		movies.family.push(familyMovies)
		dispatch(setMovies(movies));
	} catch (err) {
		console.log(err);
		dispatch(getMoviesFailed());
	}
};

export const getTVShows = () => async (dispatch) => {
	try {
		dispatch(getMoviesLoading());
		const movies = { hotTV: [], newTV: [] };
		const hotMovies = await fetchHotTV();
		const hotMoviesValid = hotMovies.filter((movie) => movie.backdrop_path !== null);
		const newMovies = await fetchNewTV();
		const newMoviesValid = newMovies.filter((movie) => movie.backdrop_path !== null);
		movies.hotTV.push(hotMoviesValid);
		movies.newTV.push(newMoviesValid);
		dispatch(setTVShows(movies));
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
		const movieDetailsWithCast = Object.assign(movieDetails, movieCast);
		console.log(movieDetails);
		console.log(movieDetailsWithCast);
		dispatch(setMovieDetails(movieDetailsWithCast));
		dispatch(toggleMovieDetails());
	} catch (err) {
		console.log(err);
		dispatch(getMovieDetailsFailed());
	}
};

export const fetchTVDetails = (index, id) => async (dispatch) => {
	try {
		dispatch(getMovieDetailsLoading());
		const movieDetails = await fetchDetailsTV(id);
		const movieCast = await fetchTVCast(id);
		const movieDetailsWithCast = Object.assign(movieDetails, movieCast);
		movieDetailsWithCast["release_date"] = movieDetailsWithCast["last_air_date"];
		delete movieDetailsWithCast["last_air_date"];
		movieDetailsWithCast["runtime"] = movieDetailsWithCast["episode_run_time"];
		delete movieDetailsWithCast["episode_run_time"];
		console.log(movieDetailsWithCast);
		dispatch(setMovieDetails(movieDetailsWithCast));
		dispatch(toggleMovieDetails());
	} catch (err) {
		console.log(err);
		dispatch(getMovieDetailsFailed());
	}
};

export const selectMovies = (state) => state.movies;
