import React from 'react'
import TMDuseState from './components/TMDuseState'
import TMDuseEffect from './components/TMDuseEffect'
import TMDuseContext from './components/TMDuseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Trần Minh Đức - Hook</h1>
      <hr />
      <TMDuseState />
      <hr />
      <TMDuseEffect />
      <hr />
      <TMDuseContext />
    </div>
  )
}
