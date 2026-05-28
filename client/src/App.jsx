// App.jsx
import React from 'react'
import {ToastContainer , toast} from 'react-toastify'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup /> }/>
      </Routes>
      {/* Toast Container */}
      <ToastContainer
      position='top-right'
      autoClose = {3000} />
    </div>
  )
}

export default App