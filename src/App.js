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
import Login from "./components/login";
import Register from "./components/register";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Watchlist from "./components/watchlist";

function App() {
  const [movies, setMovies] = useState([]);

  //const [reviewIds, setReviewIds] = useState([]);

  //  console.log("hi");

  const getAllMovies = async () => {
    //console.log("hi");

    try {
      const response = await api.get("/api/movies");

      //console.log(response.data);

      setMovies(response.data);
    } catch (error) {
      console.log("App-getAllMovies: ", error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <CustomNavbar />

      <ToastContainer
        autoClose={3000}
        position="top-right"
        closeOnClick
        pauseOnHover
        transition={Slide}
        hideProgressBar={false}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/reviews/:imdbId" element={<Reviews />} />
          <Route path="/watchlist" element={<Watchlist />} /> 
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
