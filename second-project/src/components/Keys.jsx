import React from 'react'
import './Keys.css'
import Result from './Result'
function Calculator() {
    function show(value){
      if(value=="="){
        let exp = document.getElementById('result').innerText
      document.getElementById('result').innerText = eval(exp)
      }
      else {
      document.getElementById('result').innerText += value
    }
    }
  return (
    <div className="calculator">

      <Result />

      <div id="btns">
        <button onClick={() => show('1')}>1</button>
        <button onClick={() => show('+')}>+</button>
        <button onClick={() => show('2')}>2</button>
        <button onClick={() => show('=')}>=</button>
      </div>

    </div>
    
  )
}

export default Calculator
