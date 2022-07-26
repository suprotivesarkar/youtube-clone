import React from 'react'
import './App.css';
import Header from './components/_header/header.js'
import Sidebar from './components/_sidebar/sidebar.js'
import RecomendedVideos from './components/_recomendedVideos/recomendedVideos'
function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='app_page'>
      <Sidebar/>
      <RecomendedVideos/>
      </div>
    </div>
  );
}

export default App;
