

const Navbar = ({setShow, show}) => {

    const showSearhBar = () => {
        setShow(!show)
    }

  return (
    <div className="flex justify-between items-center text-purple-700 bg-purple-200 px-5 py-2 fixed  w-full z-20">
      <h1 className="text-3xl font-bold">movie-app</h1>
      <div>
        <ul className="flex gap-3 items-center">
          <li onClick={showSearhBar}>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-400 hover:text-white transition-colors"
            >
              Search <i className="fa-solid fa-magnifying-glass pl-1"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-400 hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-5 py-1 rounded-md hover:bg-purple-400 hover:text-white transition-colors"
            >
              Main
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
