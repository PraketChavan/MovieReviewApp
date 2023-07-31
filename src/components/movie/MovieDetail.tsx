import { useEffect, useState } from "react";
import { MovieType } from "../../model/movie.interface";
import { ReviewType } from "../../model/review.interface";
import ReviewPost from "../review/ReviewPost";
import { useParams } from "react-router-dom";
import ReviewForm from "../review/ReviewForm";

interface MovieDetailProp {
  movieGetApi: (imdbId: string) => Promise<MovieType>;
  reviewPostApi: (review: ReviewType, movie: MovieType) => void;
}

function MovieDetail({ movieGetApi, reviewPostApi }: MovieDetailProp) {
  let param = useParams();
  const movieId = param.movieId!;
  const [movie, setMovie] = useState<MovieType>();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isVisible, setVisible] = useState<boolean>(false);

  // handle the submit of the comment form
  const handleSumbit = async (
    e: React.FormEvent<HTMLFormElement>,
    name: string,
    comment: string
  ) => {
    //stop the page from refresion for a better user experience
    e.preventDefault();
    let currentDateTime: Date = new Date();

    //post the review to the back end api
    try {
      const response = await reviewPostApi(
        { reviewBody: comment, datePosted: currentDateTime },
        movie!
      );

      //update the review state
      setReviews([
        ...reviews,
        { reviewBody: comment, datePosted: currentDateTime },
      ]);
    } catch (err) {
      console.error(err);
    }

    //update the visible state to hide the form
    setVisible(false);
  };

  //get the moview and reviews from the backend when loading the page first time
  useEffect(() => {
    let ignore: boolean = false;

    async function getMovieFromBackEnd() {
      const jsonResponse = await movieGetApi(movieId);

      if (!ignore) {
        console.log("Fetching");
        setMovie(jsonResponse);
        setReviews(jsonResponse.review);
      }
    }

    getMovieFromBackEnd();

    return () => {
      ignore = true;
    };
  }, []);

  if (movie === undefined) {
    return <h1>Movie is Null</h1>;
  } else {
    return (
      <div className="container">
        <div className="row align-item-start">
          <div className="col text-center">
            <h6 className="">{movie.title}</h6>
            <p className="">This is the movie text</p>
            <p className="">{new Date(movie.releaseDate).toDateString()}</p>
            <a className="" href={movie.trailerLink}>
              Trailer Link
            </a>
          </div>
          <div className="col">
            <ul className="list-group">
              {reviews.map((item: ReviewType) => (
                <li className="list-group-item">
                  <ReviewPost review={item} />
                </li>
              ))}
            </ul>
            {isVisible && <ReviewForm handleSumbit={handleSumbit} />}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setVisible(!isVisible)}
            >
              {isVisible ? "Hide" : "Create new comment"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
