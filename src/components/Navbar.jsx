const Navbar = ({ setShow, show,setHome }) => {
  const showSearhBar = () => {
    setShow(!show);
    setHome(false)
  };
  const closeSearhBar = () => {
    setShow(false);
    setHome(true)
  };

  return (
    <div className="flex justify-between items-center text-purple-200 bg-purple-700 px-5 py-2 fixed  w-full z-20">
      <h1 className="text-3xl font-bold">movie-app</h1>
      <div>
        <ul className="flex gap-3 items-center">
          <li onClick={showSearhBar}>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-200 hover:text-purple-800 transition-colors focus:bg-purple-200 focus:text-purple-800"
            >
              Search <i className="fa-solid fa-magnifying-glass pl-1"></i>
            </a>
          </li>
          <li onClick={closeSearhBar}>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-200 hover:text-purple-800 transition-colors focus:bg-purple-200 focus:text-purple-800"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-user text-lg ml-4 cursor-not-allowed"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
