import React from 'react'
import {Link} from 'react-scroll'

export default function Nav() {
  return (
    <div className='div'>
        <nav className="navbar navbar-expand-lg text-white p-4 active fixed-top">
  <div className="container d-flex justify-content-between">
    <div> 
    <li className="navbar-brand text-white fw-bolder fs-3" to='home' >
    <Link className=' home-link' to='home' spy={true} smooth={true} offset={-50} duration={500} >Start React</Link>
      </li>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} >portfolio</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link'  to='about' spy={true} smooth={true} offset={-50} duration={500} >About</Link>
        </li>

        <li className="nav-item">
        <Link className='nav-link'  to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
        </li>


      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
