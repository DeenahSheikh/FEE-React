import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    /*<div>
      <nav className='navbar'>
        <button >Home</button>
        <button>About</button>
        <button>SignUp</button>
        <button onClick={showSignIn}>SignIn</button>
      </nav>
    </div>
    */

    <div>
      <nav className='navbar'>
        <a href="/">Home</a> &nbsp; &nbsp; &nbsp; 
        <a href="/about">About us</a>&nbsp; &nbsp; &nbsp; 
        <a href="/contact">Contact us</a>&nbsp; &nbsp; &nbsp; 
        <a href="/Login">Login</a>&nbsp; &nbsp; &nbsp; 
        <a href="/Signin">SignIn</a>&nbsp; &nbsp; &nbsp; 

      </nav>
    </div>
  )
}

export default Navbar