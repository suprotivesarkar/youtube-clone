import React from 'react'
import Header from '../components/_header/header'
import Sidebar from '../components/_sidebar/sidebar'
import RecomendedVideos from '../components/_recomendedVideos/recomendedVideos'
function home() {
  return (
    <div>
        <Header/>
        <div className='app_page'>
        <Sidebar/>
        <RecomendedVideos/>
        </div>
    </div>
  )
}

export default home