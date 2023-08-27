
import './App.css'
import React from 'react'
import SideBar from './components/Sidebar/Sidebar.jsx'
import Main from './components/MainPage/Main'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <div className="main_container">
    <div className='flex'>
      <SideBar />
      <Main/>
    </div>
      <Footer/>
    </div>
  )
}

export default App
