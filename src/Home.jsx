import React from 'react'
import img from './imgs/avataaars.png';


export default function Home() {
  return (
    <div className='container-home' id='home'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <img src={img} alt=''/>
          <h1 className='text-white title m-4'>START REACT</h1>
          <div className='divider-custom divider-line'>
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
            <i class="fa-solid fa-star  text-white fa-2xl"></i>
                  </div>
            <div className="divider-custom-line"></div>
            
          </div>

          <p className='text-white fs-3'>Graphic Artist - Web Designer - Illustrator</p>

        
        </div>
        
    </div>
  )
}
