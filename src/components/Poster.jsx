

const Poster = ({title,year,type,src}) => {
  return (
    <div className='w-52 h-80 rounded-3xl bg-blue-100 bg-center bg-no-repeat bg-cover p-4 mx-5 my-3 text-white flex flex-col justify-between bg-[url("https://i.pinimg.com/550x/37/e5/ba/37e5ba98784e235fd50cf8d176028834.jpg")]'>
        <div>
            <p>{type}</p>
            <p>{src}</p>
        </div>
        <div>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <p className="font-light">{year}</p>
        </div>
    </div>
  )
}

export default Poster