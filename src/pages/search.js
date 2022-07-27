import React from 'react'
import Header from '../components/_header/header'
import Sidebar from '../components/_sidebar/sidebar'
import SearchPage from '../components/_searchPage/searchPage'

function search() {
  return (
    <div>
      <Header/>
        <div className ='app_page'>
        <Sidebar/>
        <SearchPage/>
        </div>
    </div>
  )
}

export default search