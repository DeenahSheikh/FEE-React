import React from 'react'

function SignIn() {
    function login(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

         if (username === 'Ram' && password === 'ram1234') {
            document.getElementById('result').innerText = 'Welcome Ram!';
        }
        else {
            document.getElementById('result').innerText = 'Invalid Credentials';
        }
    }
    return (
        <div><form>
            Enter Username:<input type='text' id='username' />
            <br />
            Enter Password:<input type='password' id='password' />
            <br />
            </form>
            <button onClick={login}>Sign In</button>

            <h2 id='result'></h2>
            </div>
    )
}

export default SignIn



