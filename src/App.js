import './App.css';
import { Component } from 'react';
import  Nav from './Nav'
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';



export class App extends Component
{
  state = {

  }

  render()
  {
    return(
      <div> 
        <Nav/>
      <div className='container-fluid  p-0'>
      <Home/>
      <Portfolio/>

      <About/>
      <Contact/>
      <Footer/>
      <div className="copy-right py-4 text-center text-white">
                <div className="container">
                  <small>Copyright © Your Website 2021</small>
                </div>
              </div>


        
      </div>


      </div>
    )

  }
}