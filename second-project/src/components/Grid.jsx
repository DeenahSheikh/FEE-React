import React from 'react'
import './Grid.css'
import Navbar from './Navbar'
import Content from './Content'

function Grid() {
  return (
    <div className='grid'>
        <div className='header'>
            <Navbar/>
            </div>
        <div className='left'>
            Sidebar</div>
        <div className='right'>
            <Content/>
            </div>
              
    </div>
  )
}

export default Grid
