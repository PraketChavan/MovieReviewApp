import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCardGroup from "./components/movie/MovieCardGroup";
import ReviewForm from "./components/review/ReviewForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MovieCardGroup />} />
        <Route path="/movies/:movieId" element={<ReviewForm />} />
      </Routes>
      {/* <MovieCardGroup /> */}
    </>
  );
}

export default App;
