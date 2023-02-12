import Home from "./Home";

const Main = ({ movies, home, setClickedMovie ,setShowDetail, setFavorite, favorite,favoriteDetail}) => {
  // const detailDiv = document.getElementById("detail-div");

  const searchClick = (e) => {
    if(e.target.classList.contains('fa-heart')){
      return
    }
    let movieName = e.target.children[1]?.children[0].innerText;
    movieName ||
      (movieName =
        e.target.closest("#main-cards").children[1]?.children[0].innerText);
      setClickedMovie(movieName);
      setShowDetail(true)
  };

  const addFavorite = (e) => {
    if(e.target.classList.contains('text-red-600')){
      e.target.classList.remove('text-red-600')
    }else{
      e.target.classList.add('text-red-600')
    }
    let clicked = (e.target.parentElement.parentElement.nextElementSibling.children[0].innerText)

    if(favorite.includes(clicked)){
      favorite = favorite.filter(e => e != clicked)
      setFavorite(favorite)
    }
    else{
      setFavorite([...favorite,clicked])
    }
  }

  return (
    <div>
      {!home ? (
        <div
          id="main"
          className="mx-5 grid translate-y-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-transform"
        >
          {movies?.map(({ Title, Year, Type, Poster }, i) => {
            // if(favorite.includes(Title)){
            //   let heart = document.getElementById('heart')
            //   console.log(heart?.classList);
            //   // heart.classList?.add('text-red-600')
            // }
            return (
              <div
                key={i}
                className={`w-52 h-80 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto text-white flex flex-col justify-between opacity-90 hover:opacity-100 hover:shadow-lg hover:shadow-purple-700/50 transition-all cursor-pointer`}
                style={{ backgroundImage: `url(${Poster})` }}
                onClick={searchClick}
                id="main-cards"
              >
                <div className="flex justify-between">
                  <p id="heart" className="hover:text-red-200" onClick={addFavorite} ><i className={`fas fa-heart text-xl ${favorite.includes(Title) && 'text-red-600'}  transition-colors`}></i></p>
                  <p>{Type}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-medium">{Title}</h2>
                  <p className="font-light">{Year}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Home setClickedMovie={setClickedMovie} setShowDetail={setShowDetail} favoriteDetail={favoriteDetail}/>
      )}
    </div>
  );
};

export default Main;
