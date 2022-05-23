import React, {useRef} from 'react'
import Ponuda from './Ponuda'
import Modal from './Modal'
import pizzaMain from '../image/pizzaMain.jpg'
import '../styles/MainPage/MainPage.css'

function MainPage() {

  const pizzaBanner = pizzaMain; 

  let centeredText = useRef(null)

  const handleEnter = () => {

    centeredText.current.classList.add("centeredTextActive")
  }

  const handleLeave = () => {

    centeredText.current.classList.remove("centeredTextActive")
  }

  return (
    <div>
      <div className="mainWrapper">
        <img className='banner'  onMouseEnter={handleEnter} onMouseLeave={handleLeave} alt='pizzaImage' src={pizzaBanner} />
        <div id='centeredText' ref={centeredText} className='centeredText'> Samo ove nedelje 30% na kaprizocu uz kupon KAPRICOZA </div>
      </div>

      <Ponuda/>
      <Modal/>


    </div>
  )
}

export default MainPage
