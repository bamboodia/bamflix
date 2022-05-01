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

export const fetchHotMovies = async () => {	
	const response = await movieApi.get(`/discover/movie?api_key=${APIKey}&language=en-US$sort_by=popularity.desc&include_adult=false&include_video=false`).catch((err) => {
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

export const fetchMovieDetails = async (id) => {
	const response = await movieApi.get(`/movie/${id}?api_key=${APIKey}&language=en-US`).catch((err) => {
		console.log("Err :", err);
	});
	console.log(response.data)
	return response.data
}