import axios from "axios";
import { APIKey } from "./MovieApiKey";

const today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
const date = yyyy + '-' + mm + '-' + dd;

const movieApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export const getGenres = async () => {
	const response= await movieApi.get(`/genre/movie/list?api_key=${APIKey}&language=en-US`).catch(err => {
		console.log("Err:",err)
	});
	return response.data.genres
}

export const fetchHotMovies = async (includeId, omitId) => {	
	const response = await movieApi.get(`/discover/movie?api_key=${APIKey}&language=en-US$sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${includeId}&without_genres=${omitId}&release_date.lte=${date}`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data.results
};

export const fetchNewMovies = async () => {	
	const response = await movieApi.get(`/discover/movie?api_key=${APIKey}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&release_date.lte=${date}&vote_count.gte=5&page=1`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data.results
};

export const fetchHotTV = async () => {
	const response = await movieApi.get(`/discover/tv?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_status=0&with_original_language=en`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data.results
}
export const fetchNewTV = async () => {
	const response = await movieApi.get(`/discover/tv?api_key=${APIKey}&language=en-US&sort_by=vote_average.desc&include_null_first_air_dates=false&release_date.lte=${date}&with_status=0&with_original_language=en`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data.results
}
export const fetchMovieDetails = async (id) => {
	const response = await movieApi.get(`/movie/${id}?api_key=${APIKey}&language=en-US`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data
}
export const fetchDetailsTV = async (id) => {
	const response = await movieApi.get(`/tv/${id}?api_key=${APIKey}&language=en-US`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data
}

export const fetchCast = async (id) => {
	const response = await movieApi.get(`/movie/${id}/credits?api_key=${APIKey}&language=en-US`).catch((err) => {
		console.log("Err :", err);
	});	
	return response.data
}
export const fetchTVCast = async (id) => {
	const response = await movieApi.get(`/tv/${id}/credits?api_key=${APIKey}&language=en-US`).catch((err) => {
		console.log("Err :", err);
	});	
	return response.data
}


