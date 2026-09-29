import React from 'react'

function Welcome() {
    function show(){
        let uname=document.getElementById('username').value;
        document.getElementById('showMsg').innerText=`Welcome ${uname}!`;
    }
  return (
    <div>
        Enter Username:<input type='text' id='username'/>
      <button onClick={show}>E N T E R</button>
      <h1 id='showMsg'></h1>
    </div>
  )
}

export default Welcome
