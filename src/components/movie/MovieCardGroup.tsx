import { useEffect, useState } from "react";
import { Movie } from "../../api/api";
import MovieCard from "./MovieCard";
import { MovieType } from "../../model/movie.interface";

function MovieGroup() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    let ignore: boolean = false;

    async function getMovieFromBackEnd() {
      const jsonResponse = await Movie.getPosts();

      if (!ignore) {
        console.log("Fetching");
        setMovies(jsonResponse);
      }
    }

    getMovieFromBackEnd();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div className="row row-cols-3 row-cols-md-5 g-4">
        {movies.map((item: MovieType) => {
          return <MovieCard movie={item} />;
        })}
      </div>
    </>
  );
}

export default MovieGroup;
