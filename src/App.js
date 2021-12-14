import logo from './logo.svg'
import './App.css'
import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import Main from './pages/main/Main'

function App() {
  return (
    <div className="App">
      
            <div>
              <Routes>
                  <Route exact path="/" element={<Main /> } /> 
                  <Route path="/contact/:id" element={<Contact />} />
                  <Route path="*" element={<h2>404 NOT FOUND</h2>} />
               </Routes>
            </div>
        
      
    </div>
  )
}

export default App;