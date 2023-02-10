import Poster from "./Poster";

const Main = ({ movies }) => {
  const main = document.getElementById('main')
  // main.textContent === '' && main
  return (
    <div id="main" className="mx-5 mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies?.map(({ Title, Year, Type, Poster },i) => {
        return (
          <div key={i} className={`w-52 h-80 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto text-white flex flex-col justify-between opacity-90 hover:opacity-100 hover:shadow-xl hover:shadow-indigo-500/50 transition-all`} style={{ backgroundImage: `url(${Poster})`}}>
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
  );
};

export default Main;
