import React,{ useState, useEffect} from 'react'
import Modal from './Modal'
import allPizzas from './pizzas.txt'

import '../styles/OrderPage/OrderPage.css'


function OrderPage() {

  let [pizzas, setPizzas] = useState([]);

  let [price, setPrice] = useState(800);

  useEffect(()=>{
    const getPizzas = async () => {
    
      await fetch(allPizzas)
        .then((response) => response.text())
        .then((result) =>{
          const pizze = result.split(","); 
          setPizzas(pizze);
        });
    }

    getPizzas();
  },[])

  useEffect(()=>{

  })

  const handleChangeSize = (e) => {
    console.log(e.target.value)
    e.target.value === "24 Cm" && setPrice(800);
    e.target.value === "33 Cm" && setPrice(1000); 
    e.target.value === "54 Cm" && setPrice(1200); 
  }

  return (
    <div>
        <div className='formWrapper centered grid'>
          <div>
            <form>
                <input className='formInput' type={"text"} placeholder='Vase ime' />
                <input className='formInput' type={"text"} placeholder='Vase Prezime' />
                <input className='formInput' type={"text"} placeholder='Ulica i broj' />
                <input className='formInput' type={"number"} placeholder='Broj telefona' />
                <input className='formInput' type={"text"} placeholder='Bonus kupon' />

   
                <select  className='pizzaSelect' id="pizzaSelect">
                  {pizzas.map((pizza) => 
                    <option key={pizza} > {pizza}</option>
                  )}
                </select>

                <select onChange={handleChangeSize} className='sizeSeletct' id="sizeSelect" >
                  <option>24 Cm</option>
                  <option>33 Cm</option>
                  <option>54 Cm</option>
                </select>

                <label className='priceLabel'>
                  Cena vase pizze je: {price}
                </label>

                <button className='formButton' type='submit'> Porucite </button>
                
            </form>
            </div>
        </div>

        <Modal/>
    </div>
  )
}

export default OrderPage
