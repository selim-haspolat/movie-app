import React from 'react'
import New from './New'
import Slider from './Slider'

const Home = ({setClickedMovie ,setShowDetail}) => {
  return (
    <div id='home-div' className='mt-16 mx-6 transition-transform duration-300'>
        <Slider setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <New setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
    </div>
  )
}

export default Home