import React from "react";
import "./Modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, toggleMovieDetails } from "../../store/moviesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
	const selectedMovies = useSelector(selectMovies);
	const { showingDetails, details } = selectedMovies;
	const dispatch = useDispatch();
	const showModal = showingDetails ? "modal-wrapper show" : "modal hide";
	const baseImgUrl = "https://image.tmdb.org/t/p/w500";
	const imgUrl = `${baseImgUrl}${details.backdrop_path}`;

	return (
		<div className={showModal} onClick={() => dispatch(toggleMovieDetails())}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<div className="banner">
					<img src={imgUrl} alt="" />
				</div>
				<div className="title text-shadow">{details.title}</div>
				<FontAwesomeIcon className="exit-modal" icon={faXmark} onClick={() => dispatch(toggleMovieDetails())} />
				<div className="details">
					<div className="info">
						<div className="meta"></div>
						<div className="plot"></div>
					</div>
					<div className="prod">
						<div className="cast"></div>
						<div className="genres">
                            <span className="tag-name">Cast:</span>
							<span className="tag-name">Genres:</span>{" "}
							{details.genres.map((genre, index) => (
								<span key={genre.id}>{(index ? ", " : "") + genre.name}</span>
							))}{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
