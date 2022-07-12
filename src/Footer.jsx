import React from 'react'

export default function Footer() {
  return (
    <footer className='footer text-center'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className='text-uppercase mb-4'>Location</h4>
                    <p className='mb-4 lead'>
                    2215 John Daniel Drive
                    <br/>
                    Clark, MO 65243
                    </p>
                </div>

                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className='text-uppercase mb-4'>AROUND THE WEB</h4>


                    <a className='btn btn-outline-light btn-social mx-1 rounded-circle d-inline-flex justify-content-center align-items-center'>
                    <i class="fa-brands fa-facebook-f"></i>
                    </a>


                    <a className='btn btn-outline-light btn-social mx-1 rounded-circle d-inline-flex justify-content-center align-items-center'>
                    <i class="fab fa-fw fa-twitter"></i>
                    </a>

                    <a className='btn btn-outline-light btn-social mx-1 rounded-circle d-inline-flex justify-content-center align-items-center'>
                     <i class="fab fa-fw fa-linkedin-in"></i>                   
                       </a>

                    <a className='btn btn-outline-light btn-social mx-1 rounded-circle d-inline-flex justify-content-center align-items-center'>
                    <i class="fab fa-fw fa-dribbble"></i>
                    </a>




                </div>


                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className='text-uppercase mb-4'>ABOUT FREELANCER</h4>
                    <p className='mb-4 lead'>
                    Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>



            </div>
        </div>
         
    </footer>
    
  )
}
