import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './Pages/Landing'
import { Admin } from './Pages/Admin'
import { Entrepreneur } from './Pages/Entrepreneur'
import { Ventura } from './Pages/Ventura'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/admin/*' element={<Admin />} />
      <Route path='/entrepreneur/*' element={<Entrepreneur />} />
      <Route path='/ventura/*' element={<Ventura />} />
    </Routes>
  )
}
