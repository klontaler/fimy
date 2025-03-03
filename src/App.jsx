import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './router'
import NavBar from './components/layout/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
