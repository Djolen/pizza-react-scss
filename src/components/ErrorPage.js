import React from 'react'


function ErrorPage() {

    let decoration = {color: "white" , fontWeight:"bold", textAlign: "center", padding:"15px", fontSize: "3em"};


  return (
    <div style={decoration} className='errorPageWrapper'>
        Error 404 - PAGE NOT FOUND
    </div>
  )
}



export default ErrorPage
