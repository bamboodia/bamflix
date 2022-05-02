import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Films, TV } from "./components/browse/Home";
import "./App.scss";
import { selectMovies } from "./store/moviesSlice";

function App() {
	const selector = useSelector(selectMovies);
	const { showingDetails } = selector;

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
