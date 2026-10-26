import React from 'react'

function SignIn() {
    function saveForm() {

    let username = document.getElementById("username").value
    let pwd1 = document.getElementById("pwd1").value
    let pwd2 = document.getElementById("pwd2").value

    if (username == '' || pwd1 == '' || pwd2 == '') {

      alert("Please fill all required fields!")

    }

    else if (pwd1 != pwd2) {

      alert("Password & Retype-passwords must be same!")

    }

    else {

      localStorage.user = JSON.stringify({
        username: username,
        password: pwd1
      })

      document.getElementById("aftersave").style.display = "block"
    }
  }

  return (
    <div>
        <h2>Register</h2>
        Username:<input type="text" id="username" /><br /><br />
        Password:<input type="password" id="pwd1" /><br /><br />
        Retype Password:<input type="password" id="pwd2" /><br /><br />
        
        <button onClick={saveForm}>
        Submit
      </button>

      <div id="aftersave" style={{display:"none"}}>

        <h2>Registered Successfully!</h2>

      </div>

    </div>
  )
}


export default SignIn