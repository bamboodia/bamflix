import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Films, TV } from "./components/browse/Home";
import "./App.scss";

function App() {

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
