
import './App.css'
import React from 'react'
import SideBar from './components/sidebar/sidebar.jsx'
import Main from './components/MainPage/Main'
function App() {
  

  return (
    <div className='flex'>
      <SideBar />
      <Main/>
    </div>
  )
}

export default App
