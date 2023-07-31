import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCardGroup from "./components/movie/MovieCardGroup";
import MovieDetail from "./components/movie/MovieDetail";
import { MovieApi, ReviewApi } from "./api/api";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MovieCardGroup />} />
        <Route
          path="/movies/:movieId"
          element={
            <MovieDetail
              movieGetApi={MovieApi.getMovie}
              reviewPostApi={ReviewApi.postReview}
            />
          }
        />
      </Routes>
      {/* <MovieCardGroup /> */}
    </>
  );
}

export default App;
