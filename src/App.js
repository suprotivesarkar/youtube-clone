import React from 'react'
import './App.css';
import Search from './pages/search'
import Home from './pages/home'
import Error from './pages/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/search/:searchTerm" element={<Search/>}/>
          <Route exact path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
