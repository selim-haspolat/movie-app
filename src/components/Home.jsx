import React from 'react'
import Favorite from './Favorite'
import New from './New'
import Slider from './Slider'

const Home = ({setClickedMovie ,setShowDetail, favorite,favoriteDetail}) => {
  return (
    <div id='home-div' className='mt-16 mx-6 transition-transform duration-300'>
        <Slider setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <New setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <Favorite setClickedMovie={setClickedMovie} setShowDetail={setShowDetail} favoriteDetail={favoriteDetail}/>
    </div>
  )
}

export default Home