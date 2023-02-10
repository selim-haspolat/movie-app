import React from 'react'

const SlideElement = ({src,name, setClickedMovie, setShowDetail}) => {

  const slideElementClick = (e) => {
    let movieName = e.target.getAttribute('value');
    movieName ||
      (movieName =
        e.target.closest("#slide-div").getAttribute('value'));
      setClickedMovie(movieName);
      setShowDetail(true)
  }

  return (
    <div id='slide-div' onClick={slideElementClick} value={name} className='cursor-pointer h-80 md:h-[500px] lg:h-[600px] rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-10 hover:opacity-80 transition-all' style={{ backgroundImage: `url(${src})` }}>
    </div>
  )
}

export default SlideElement
