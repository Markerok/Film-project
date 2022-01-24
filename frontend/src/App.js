import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}

export default App
