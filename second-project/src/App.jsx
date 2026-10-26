import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> 
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App