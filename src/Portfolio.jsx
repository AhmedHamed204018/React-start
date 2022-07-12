import React from 'react'
import img1 from './imgs/cabin.png'
import img2 from './imgs/cake.png'
import img3 from './imgs/circus.png'
import img4 from './imgs/game.png'
import img5 from './imgs/safe.png'
import img6 from './imgs/submarine.png'


export default function Portfolio() {
  return (
    <div>
        <div className="container text-center p-5" id='portfolio'>
        <h1 className=' title-2 m-4'>PORTFOLIO</h1>
          <div className='divider-custom divider-line'>
            <div className="divider-custom-line-port"></div>
            <div className="divider-custom-icon">
            <i class="fa-solid fa-star port-ico fa-2xl"></i>
                  </div>
            <div className="divider-custom-line-port"></div>
            
          </div>

          <div className="row g-5 p-5 ">

            <div className='col-md-4 items position-relative'>

              <div className="pic position-relative">
              <img src={img1} alt='' className='w-100'/>
              <div class="layer position-absolute end-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus fa-5x  text-white"></i>

                 </div>
              </div>
              
            </div>


            <div className='col-md-4 items position-relative'>

              <div className="pic position-relative">
              <img src={img2} alt='' className='w-100'/>
              <div class="layer position-absolute end-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus fa-5x  text-white"></i>

                 </div>
              </div>
              
            </div>

            <div className='col-md-4 items position-relative'>

              <div className="pic position-relative">
              <img src={img3} alt='' className='w-100'/>
              <div class="layer position-absolute end-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus fa-5x  text-white"></i>

                 </div>
              </div>
              
            </div>

            <div className='col-md-4 items position-relative'>

              <div className="pic position-relative">
              <img src={img4} alt='' className='w-100'/>
              <div class="layer position-absolute end-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus fa-5x  text-white"></i>

                 </div>
              </div>
              
            </div>

            <div className='col-md-4 items position-relative'>

              <div className="pic position-relative">
              <img src={img5} alt='' className='w-100'/>
              <div class="layer position-absolute end-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus fa-5x  text-white"></i>

                 </div>
              </div>
              
            </div>

            <div className='col-md-4 items position-relative'>

              <div className="pic position-relative">
              <img src={img6} alt='' className='w-100'/>
              <div class="layer position-absolute end-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-plus fa-5x  text-white"></i>

                 </div>
              </div>
              
            </div>


          </div>


        </div>

    </div>
  )
}
