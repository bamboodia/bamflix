import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../components/MovieCard/MovieCard";
import "./MovieSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieSlider(props) {
	const { title, movies } = props;

	return (
		<div className="slider">
			<div className="list-title">
				<h2>{title}</h2>
			</div>
			<Swiper initialSlide={6} slidesPerView={5} spaceBetween={10} slidesPerGroup={5} loop={true} loopFillGroupWithBlank={false} navigation={true} modules={[Navigation]} className="mySwiper">
				{movies[0].map((movie, index) => (
					<SwiperSlide key={movie.id}>
						<div className="title">{movie.title}</div>
						<MovieCard movie={movie} index={index} />
						<div className="rating">
							<FontAwesomeIcon className="rating-star" icon={faStar} size="xs" />
							{movie.vote_average}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
