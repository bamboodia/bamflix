import React from "react";
import "./Modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, toggleMovieDetails } from "../../store/moviesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCalendarDays, faStopwatch, faStar } from "@fortawesome/free-solid-svg-icons";
import { convertMinsToHrsMins, truncate } from "../../common/utilities.js";

const Modal = () => {
	const selectedMovies = useSelector(selectMovies);
	const { showingDetails, details } = selectedMovies;
	const dispatch = useDispatch();
	const showModal = showingDetails ? "modal-wrapper show" : "modal hide";
	const baseImgUrl = "https://image.tmdb.org/t/p/w500";
	const imgUrl = `${baseImgUrl}${details.backdrop_path}`;

	return (
		<div className={showModal} onClick={() => dispatch(toggleMovieDetails())}>
			<div className="modal drop-shadow" onClick={(e) => e.stopPropagation()}>
				<div className="banner">
					<img src={imgUrl} alt="" />
				</div>{" "}
				<div className="title">
					<div className="text-shadow">{details.title}</div>
					<div className="tagline text-shadow">{details.tagline}</div>
				</div>
				<FontAwesomeIcon className="exit-modal" icon={faXmark} onClick={() => dispatch(toggleMovieDetails())} />
				<div className="details">
					<div className="info">
						<div className="meta split">
							<div className="year meta-child">
								<FontAwesomeIcon icon={faCalendarDays} /> {details.release_date.slice(0, -6)}
							</div>{" "}
							<div className="runtime meta-child">
								<FontAwesomeIcon icon={faStopwatch} /> {convertMinsToHrsMins(details.runtime)}{" "}
							</div>
							<div className="rating meta-child">
								<FontAwesomeIcon className="rating-star" icon={faStar} size="xs" />
								{details.vote_average}
							</div>
						</div>
						<div className="plot"> {truncate(details.overview)} </div>
					</div>
					<div className="prod">
						<div className="cast">
							<span className="tag-name">Cast: </span>{" "}
							{details.cast.slice(0, 4).map((person, index) => (
								<span key={person.id}>{person.name}, </span>
							))}{" "}
							<span>more...</span>
						</div>
						<div className="genres">
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
