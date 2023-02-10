const Navbar = ({ setShow, show,setHome, setMenu, menu }) => {
  const showSearhBar = () => {
    setShow(!show);
    setHome(false)
  };
  const closeSearhBar = () => {
    setShow(false);
    setHome(true)
  };
  const openMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className="flex justify-between items-center text-purple-200 bg-purple-700 px-5 py-2 fixed  w-full z-20">
      <h1 className="text-2xl sm:text-3xl font-bold">movie-app</h1>
      <div>
        <ul className="flex gap-3 items-center">
          <li onClick={showSearhBar}>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-200 hover:text-purple-800 transition-colors focus:bg-purple-200 focus:text-purple-800 hidden sm:block"
            >
              Search <i className="fa-solid fa-magnifying-glass pl-1"></i>
            </a>
          </li>
          <li onClick={closeSearhBar}>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-200 hover:text-purple-800 transition-colors focus:bg-purple-200 focus:text-purple-800 hidden sm:block"
            >
              Home
            </a>
          </li>
          <li onClick={openMenu}>
            <a
              href="#"
              className="text-xl px-2 py rounded-md hover:bg-purple-200 hover:text-purple-800 transition-colors focus:bg-purple-200 focus:text-purple-800 block sm:hidden"
            >
              <i className="fa-solid fa-bars"></i>
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
