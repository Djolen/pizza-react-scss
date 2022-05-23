import React from 'react'
import Cards from './Cards'
import Modal from './Modal'

import '../styles/About/About.css'

function About() {

  return (
    <div className='aboutWrapper'>
        <div className='aboutCard'>
            <div className='cardTitle'> Da li ste znali ?</div>
            <div className='cardText'>  Najbolja Pizza Je Ona Koja Dolazi iz Najbolje Kuhinje </div>
        </div>

        <div className='ourStaff'>
            Nas tim
        </div>

        <Cards/>
        <Modal/>

    </div>
  )
}



export default About
