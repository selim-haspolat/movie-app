const Poster = ({ title, year, type, src, i }) => {
  return (
    <div>
      <div
        key={i}
        className={`w-52 h-80 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto text-white flex flex-col justify-between opacity-90 hover:opacity-100 hover:shadow-xl hover:shadow-indigo-500/50 transition-all`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div>
          <p className="text-right">{type}</p>
        </div>
        <div>
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="font-light">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
