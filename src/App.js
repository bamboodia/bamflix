import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Hero from "./components/Hero/Hero";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Hero />
				<Modal />
				<Home />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
