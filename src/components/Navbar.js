import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { 
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from '../firebase-config';

import '../styles/Navbar/Navbar.css'


function Navbar() {

  const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

  const handleModal = (e) => {
    e.preventDefault(); 
    console.log("hehe")
    document.getElementById('container').classList.add('active')
    document.body.style.overflow= "hidden";
  }


  return (
    <div className='navbar '>
      <div className='links'>
        <Link to="/login">{!user && "Ulogujte se"} {user && " Vas nalog"}</Link>
        <Link to="/">Početna</Link>
        <Link to="/order">Porucite online</Link>
        <Link to="/about">O nama</Link> 
        <a  onClick={handleModal} href='/'> Kontakt </a>
      </div>
    </div>
  )
}



export default Navbar
