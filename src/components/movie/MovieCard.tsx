import { MovieType } from "../../model/movie.interface";
import { ReviewType } from "../../model/review.interface";

interface MovieProp {
  movie: MovieType;
}

function MovieCard({ movie }: MovieProp) {
  return (
    <div className="card">
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
