import React from 'react';
import pizzaLogo from '../image/pizzaLogo.png'; 
import '../styles/Header/Header.css'


function Header() {

    const logo = pizzaLogo;

  return (
    <div className='Header'>
        <img className='logoImage' src={logo} alt='pizza'/> 
        <h1 className='headerText'>
            (Stvarno) Najbolja Pizza
        </h1>
        <div className='icons'> 
          <a href='/'>
            <i className="instagram big icon"></i>
          </a>
          <a href='/'>
            <i className="facebook big icon"></i>
          </a>
          <a href='/'>
            <i className="twitter big icon"></i>
          </a>           
        </div>
    </div>
  )
}



export default Header
