import axios from "axios";
import { APIKey } from "./MovieApiKey";

const movieApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export const fetchMovies = async (searchTerm, page) => {	
	const response = await movieApi.get(`/discover/movie?api_key=${APIKey}&language=en-US$sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`).catch((err) => {
		console.log("Err :", err);
	});
	return response.data.results
};