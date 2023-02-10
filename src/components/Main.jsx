import Home from "./Home";

const Main = ({ movies, home, setClickedMovie ,setShowDetail}) => {
  // const detailDiv = document.getElementById("detail-div");

  const searchClick = (e) => {
    let movieName = e.target.children[1]?.children[0].innerText;
    movieName ||
      (movieName =
        e.target.closest("#main-cards").children[1]?.children[0].innerText);
      setClickedMovie(movieName);
      setShowDetail(true)
  };

  return (
    <div>
      {!home ? (
        <div
          id="main"
          className="mx-5 grid translate-y-24 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-transform"
        >
          {movies?.map(({ Title, Year, Type, Poster }, i) => {
            return (
              <div
                key={i}
                className={`w-52 h-80 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto text-white flex flex-col justify-between opacity-90 hover:opacity-100 hover:shadow-lg hover:shadow-purple-700/50 transition-all cursor-pointer`}
                style={{ backgroundImage: `url(${Poster})` }}
                onClick={searchClick}
                id="main-cards"
              >
                <div>
                  <p className="text-right">{Type}</p>
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
        <Home setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
      )}
    </div>
  );
};

export default Main;
