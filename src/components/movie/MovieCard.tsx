import { useNavigate } from "react-router-dom";
import { MovieType } from "../../model/movie.interface";
interface MovieProp {
  movie: MovieType;
}

function MovieCard({ movie }: MovieProp) {
  const navigate = useNavigate();

  function navigateToMovie(movieId: string) {
    navigate(movieId);
  }

  return (
    <div className="card" onClick={() => navigateToMovie(movie.imdbId)}>
      <div className="car-body">
        <h6 className="card-title">{movie.title}</h6>
        <p className="card-text">This is the movie text</p>
        <p className="card-text">
          {new Date(movie.releaseDate).toDateString()}
        </p>
        <a className="card-link" href={movie.trailerLink}>
          Trailer Link
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
