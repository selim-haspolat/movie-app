import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Detail from "./components/Detail";
import Menu from "./components/Menu";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [favoriteDetail, setFavoriteDetail] = useState([]);
  const [home, setHome] = useState(true);
  const [show, setShow] = useState<boolean>(false);
  const [movie, setMovie] = useState("");
  const [clickedMovie, setClickedMovie] = useState("");
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [menu, setMenu] = useState(false);
  const input = document.getElementById("search");
  const main = document.getElementById("main");
  const menuDiv = document.getElementById("menu-div");

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

  const getDetails = async (movieName: string, n: number) => {
    try {
      let res = await axios(
        `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
      );
      let data = res.data;
      if (n === 1) {
        setDetail(data);
      }
      else if (n === 2) {
        let newData = [data.Title, data.Poster]
        return newData
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    input?.classList.toggle(`skew-x-[90deg]`);
    input?.classList.toggle(`translate-y-12`);
    main?.classList.toggle("translate-y-24");
    main?.classList.toggle("translate-y-16");
  }, [show]);

  useEffect(() => {
    getData();
  }, [movie]);

  useEffect(() => {
    getDetails(clickedMovie, 1);
  }, [clickedMovie]);

  useEffect(() => {
    const fetchData = async () => {
      let data: any = [];
      data = await Promise.all(favorite.map(async (f) => {
        return await getDetails(f, 2);
      }));
      setFavoriteDetail(data);
    };
  
    fetchData();
  }, [favorite]);

  useEffect(() => {
    menuDiv?.classList.toggle("translate-y-24");
  }, [menu]);

  return (
    <div className="overflow-x-hidden h-screen bg-purple-200">
      <Navbar
        setShow={setShow}
        show={show}
        setHome={setHome}
        setMenu={setMenu}
        menu={menu}
      />
      <Menu setMovie={setMovie} setHome={setHome} />
      <Search setMovie={setMovie} />
      <Main
        movies={movies}
        home={home}
        setClickedMovie={setClickedMovie}
        setShowDetail={setShowDetail}
        setFavorite={setFavorite}
        favorite={favorite}
        favoriteDetail={favoriteDetail}
      />
      {showDetail ? (
        <div className="w-screen h-screen bg-opacity-70 bg-purple-500 absolute z-[9999] top-0 flex justify-center items-center">
          <Detail detail={detail} setShowDetail={setShowDetail} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
