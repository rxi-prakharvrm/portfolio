import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './utils/Navigation'

const App = () => {
  return (
    <div className="main-section">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App