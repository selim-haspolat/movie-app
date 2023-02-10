import { useState, useEffect } from "react";
import axios from 'axios'
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";


function App() {
  const [movies, setMovies] = useState([])
  const [show, setShow] = useState<boolean>(false)
  const [movie, setMovie] = useState('')
  const input = document.getElementById('search')
  const main = document.getElementById('main')

  const apiKey = 'b8ea9965'
  const getData = async() => {
    try {
      let res = await axios(`https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
      let data = res.data.Search
      console.log(data);
      setMovies(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    input?.classList.toggle(`skew-x-[90deg]`)
    input?.classList.toggle(`translate-y-12`)
    main?.classList.toggle('mt-24')
  }, [show])

  useEffect(() => {
    console.log(movie);
    getData()
  }, [movie])
  
  

  return (
    <div className="overflow-x-hidden h-screen bg-purple-50">
      <Navbar setShow={setShow} show={show}/>
      <Search setMovie={setMovie}/>
      <Main movies={movies}/>
    </div>
  );
}

export default App;
