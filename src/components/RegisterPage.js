import React from 'react'



function RegisterPage() {

    

  return (
    <div>
        <form>
            <input className='formInput' type={"email"} placeholder='Email'  
            
            />
            <input className='formInput' type={"password"} placeholder='Sifra'
            
            />
            <input className='formInput' type={"password"} placeholder='Ponovite sifru'
            
            />
            <button className=' registerButton'> Registrujte se </button>
        </form>
    </div>
  )
}



export default RegisterPage
