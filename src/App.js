import { useEffect, useState } from "react";
import "./App.css";
import api from "./axios/apiConfig";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home/Home";
import CustomNavbar from "./components/navbar";
import Trailer from "./components/trailer";
import Reviews from "./components/reviews";
import NotFound from "./components/notFound";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  //const [reviewIds, setReviewIds] = useState([]);

  const getAllMovies = async () => {
    try {
      const response = await api.get("/api/movies");

      //console.log(response.data);

      setMovies(response.data);
    } catch (error) {
      console.log("App-getAllMovies: ", error);
    }
  };

  const getMovieData = async (imdbId) => {
    try {
      const response = await api.get(`/api/movies/imdb/${imdbId}`);

      //console.log(response.data);

      setMovie(response.data);

      //setReviewIds(response.data.reviewIds); 

    } catch (error) {
      console.log("App-getMovieData: ", error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/reviews/:imdbId"
            element={
              <Reviews
                getMovieData={getMovieData}
                // reviewIds={reviewIds}
                // setReviewIds={setReviewIds}
                movie={movie}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
