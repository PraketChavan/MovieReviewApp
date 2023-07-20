interface MovieProp {
  name: string;
  releaseDate?: Date;
  imdbId?: string;
  trailerLink?: string;
}

function MovieCard({ name, releaseDate, trailerLink }: MovieProp) {
  return (
    <div className="card col-4">
      <div className="car-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-text">This is the movie text</p>
        <p className="card-text">{releaseDate?.toDateString()}</p>
        <a className="card-link" href={trailerLink}>
          Trailer Link
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
