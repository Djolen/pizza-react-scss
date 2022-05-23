import React, {useRef} from 'react'


function Modal() {

    const mainContainer= useRef(null)


    const handleClose = () => {
        mainContainer.current.classList.remove('active');
        document.body.style.overflow = "visible"
      }


  return (
    <div id="container" ref={mainContainer} className="modalContainer"> 
        <div className="modal">
            <h1 id="container" className="modalTitle">
                KONTAKT
            </h1> 
              <div className="item">
                  <i className="users icon"></i>
                  <div className="content">
                  (Stvarno) Najbolja Pizza
                  </div>
              </div>
              <div className="item">
                  <i className="marker icon"></i>
                  <div className="content">
                  Beograd
                  </div>
              </div>
              <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                  <a href="mailto:stvarnonajbolja@pizza.com">stvarnonajbolja@pizza.com</a>
                  </div>
              </div>
              <div className="item">
                  <i className="phone icon"></i>
                  <div className="content">
                  <p> 060/555-333</p>
                  </div>
              </div>
            <button id="close" onClick={handleClose}>close</button>
        </div>
      </div> 
  )
}



export default Modal
