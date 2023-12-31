import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RootContextProvider } from './context/rootContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootContextProvider>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </RootContextProvider>
)
