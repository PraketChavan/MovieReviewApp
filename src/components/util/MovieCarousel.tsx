import { Carousel } from "react-bootstrap";
import { MovieType } from "../../model/movie.interface";
import MovieCard from "../movie/MovieCard";
import { useState } from "react";
import "./MovieCarousel.css";

interface MovieCarouselProp {
  list: MovieType[];
}

function MovieCarousel({ list }: MovieCarouselProp) {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      controls={true}
      className="movieCarousel"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {list.map((i) => {
        return (
          <Carousel.Item interval={3000}>
            <MovieCard movie={i} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MovieCarousel;
