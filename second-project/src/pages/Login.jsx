import React from 'react'

function Login() {
  function validate() {

    let username = document.getElementById("loginUsername").value
    let password = document.getElementById("loginPassword").value

    let userdata = JSON.parse(localStorage.user)

    if (username == userdata.username && password == userdata.password){
       document.getElementById("showError").innerText ="Login Successful!"
    }
    else {
      document.getElementById("showError").innerText ="Invalid Credentials"
    }
  }
  return (
    <div>
      <h2>Login</h2>
      
      <h3 id="showError"></h3>
      Username:<input type="text" id="loginUsername"/>
      <br /><br />
      Password:<input type="password" id="loginPassword"/>
      <br /><br />
      <button onClick={validate}>
        Login
      </button>
    </div>
  )
}

export default Login