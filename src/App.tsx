import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Detail from "./components/Detail";

function App() {
  const [movies, setMovies] = useState([]);
  const [home, setHome] = useState(true);
  const [show, setShow] = useState<boolean>(false);
  const [movie, setMovie] = useState("");
  const [clickedMovie, setClickedMovie] = useState("");
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const input = document.getElementById("search");
  const main = document.getElementById("main");

  const apiKey = "b8ea9965";
  const getData = async () => {
    try {
      let res = await axios(
        `https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`
      );
      let data = res.data.Search;
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetails = async () => {
    try {
      let res = await axios(
        `https://www.omdbapi.com/?t=${clickedMovie}&apikey=${apiKey}`
      );
      let data = res.data;
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    input?.classList.toggle(`skew-x-[90deg]`);
    input?.classList.toggle(`translate-y-12`);
    main?.classList.toggle("mt-24");
    main?.classList.toggle("mt-16");
  }, [show]);

  useEffect(() => {
    getData();
  }, [movie]);

  useEffect(() => {
    getDetails();
  }, [clickedMovie]);

  return (
    <div className="overflow-x-hidden h-screen bg-purple-200">
      <Navbar setShow={setShow} show={show} setHome={setHome} />
      <Search setMovie={setMovie} />
      <Main movies={movies} home={home} setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
      {showDetail ? (
        <div className="w-screen h-screen bg-opacity-70 bg-purple-500 absolute z-[9999] top-0 flex justify-center items-center">
          <Detail detail={detail} setShowDetail={setShowDetail}/>
        </div>
      ) : null}
    </div>
  );
}

export default App;
