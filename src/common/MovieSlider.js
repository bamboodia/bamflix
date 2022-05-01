import React from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../components/MovieCard/MovieCard";
import "./MovieSlider.scss";
import { fetchDetails } from "../store/moviesSlice";

export default function MovieSlider(props) {
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
			<Swiper initialSlide={1} slidesPerView={6} spaceBetween={10} slidesPerGroup={6} loop={true} loopFillGroupWithBlank={false} navigation={true} modules={[Navigation]} className="mySwiper">
				{movies[0].map((movie, index) => (
					<SwiperSlide key={movie.id}>
						<MovieCard movie={movie} index={index} onToggleDetails={onToggleDetails(index)} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
