import "./App.css";
import Movie from "./components/Movie";

function App() {
  let date = new Date();
  return (
    <>
      <Movie
        name="Avatar: The Way of the water"
        releaseDate={date}
        trailerLink="https://www.github.com"
      />
    </>
  );
}

export default App;
