import React from 'react'
import New from './New'
import Slider from './Slider'

const Home = ({setClickedMovie ,setShowDetail}) => {
  return (
    <div className='mt-16 mx-6'>
        <Slider setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
        <New setClickedMovie={setClickedMovie} setShowDetail={setShowDetail}/>
    </div>
  )
}

export default Home