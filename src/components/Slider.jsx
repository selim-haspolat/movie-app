import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideElement from './SlideElement';

const Slider = ({ setClickedMovie ,setShowDetail}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div>
      <Carousel className='bg-purple-500 rounded-3xl' responsive={responsive}>
        <SlideElement src={'https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg'} name={'The Boys'} setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <SlideElement src={'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'} name={'Thor: Love and Thunder'}
         setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <SlideElement src={'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'} name={'The Godfather'} setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <SlideElement src={'https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg2YTEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg'} name={'Reacher'} setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <SlideElement src={'https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_SX300.jpg'} name={'Breaking Bad'} setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <SlideElement src={'https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg'} name={'John Wick: Chapter 4'} setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
      </Carousel>
    </div>
  )
}

export default Slider