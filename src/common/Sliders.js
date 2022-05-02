import React from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../components/MovieCard/MovieCard";
import "./Sliders.scss";
import { fetchDetails, fetchTVDetails } from "../store/moviesSlice";

export const MovieSlider = (props) => {
	const { title, movies } = props;
	const dispatch = useDispatch();
	const onToggleDetails = (index) => {
		const getDetails = (id) => {
			dispatch(fetchDetails(index, id));
		};
		return getDetails;
	};

	return (
		<div className="slider">
			<div className="list-title">
				<h2>{title}</h2>
			</div>
			<Swiper
				initialSlide={1}
				slidesPerView={2}
				spaceBetween={10}
				slidesPerGroup={2}
				loop={true}
				loopFillGroupWithBlank={false}
				navigation={true}
				breakpoints={{
					540: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					768: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1024: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					1440:{
						slidesPerView: 6,
						slidesPerGroup: 6,
					}
				}}
				modules={[Navigation]}
				className="mySwiper">
				{movies[0].map((movie, index) => (
					<SwiperSlide key={movie.id}>
						<MovieCard movie={movie} index={index} onToggleDetails={onToggleDetails(index)} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export const TVSlider = (props) => {
	const { title, movies } = props;
	const dispatch = useDispatch();

	const onToggleDetails = (index) => {
		const getDetails = (id) => {
			dispatch(fetchTVDetails(index, id));
		};
		return getDetails;
	};

	return (
		<div className="slider">
			<div className="list-title">
				<h2>{title}</h2>
			</div>
			<Swiper
				initialSlide={1}
				slidesPerView={2}
				spaceBetween={10}
				slidesPerGroup={2}
				loop={true}
				loopFillGroupWithBlank={false}
				navigation={true}
				breakpoints={{
					540: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					768: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1024: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					1440:{
						slidesPerView: 6,
						slidesPerGroup: 6,
					}
				}}
				modules={[Navigation]}
				className="mySwiper">
				{movies[0].map((movie, index) => (
					<SwiperSlide key={movie.id}>
						<MovieCard movie={movie} index={index} onToggleDetails={onToggleDetails(index)} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
