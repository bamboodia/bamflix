import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getMovies, getTVShows } from "./store/moviesSlice";
import { fetchGenres } from "./store/optionsSlice";
import { Home, Films, TV } from "./components/browse/Home";
import "./App.scss";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGenres())
		dispatch(getMovies());
		dispatch(getTVShows());
	}, [dispatch]);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/films" element={<Films />} />
					<Route path="/tv" element={<TV />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
