import { useEffect, useState } from "react";
import { MovieApi } from "../../api/api";
import MovieCard from "./MovieCard";
import { MovieType } from "../../model/movie.interface";

function MovieGroup() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    let ignore: boolean = false;

    async function getMovieFromBackEnd() {
      const jsonResponse = await MovieApi.getAllMovies();

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
      <div className="row row-cols-6 row-cols-md-6">
        {movies.map((item: MovieType) => {
          return <MovieCard movie={item} />;
        })}
      </div>
    </>
  );
}

export default MovieGroup;
