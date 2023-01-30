import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from '../Pages/Counter'
import Todos from '../Pages/Todo'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Counter/>}/>
            <Route path='/todo' element={<Todos/>} />
        </Routes>
    </div>
  )
}
