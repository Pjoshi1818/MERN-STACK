import React from 'react'
import './App.css'
import AppRouter from './AppRouter'
import { RouterProvider  } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <AppRouter /> */}
          <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
