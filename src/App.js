import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Hero from "./components/Hero/Hero";
import "./App.scss";
import { selectMovies } from "./store/moviesSlice";

function App() {
	const selector = useSelector(selectMovies)
	const { showingDetails } = selector;

	const displayModal = () => {
		if(showingDetails){
			return <Modal />
		}
	}
	
	return (
		<div className="App">
			<Router>
				<Header />
				<Hero />
				{displayModal()}
				<Home />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
