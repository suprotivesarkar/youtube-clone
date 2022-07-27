import React from 'react'
import SidebarRow from './_sidebarRow/sidebarRow'
import './sidebar.css'
import { Home, SubscriptionsOutlined, WhatshotOutlined, ThumbUpOutlined, History, VideoLibrary, OndemandVideo, WatchLater, ExpandMoreOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function sidebar() {
  return (
    <div className='sidebar'>
      <Link to={`/`}>
    <SidebarRow selected Icon={Home} title='Home'/>
    </Link>
    <SidebarRow Icon={WhatshotOutlined} title='Trending'/>
    <SidebarRow Icon={SubscriptionsOutlined} title='Subscription'/>
    <hr/>
    <SidebarRow Icon={VideoLibrary} title='Library'/>
    <SidebarRow Icon={History} title='History'/>
    <SidebarRow Icon={OndemandVideo} title='Your Video'/>
    <SidebarRow Icon={WatchLater} title='Watch Later'/>
    <SidebarRow Icon={ThumbUpOutlined} title='Liked Videos'/>
    <SidebarRow Icon={ExpandMoreOutlined} title='Show More'/>
    </div>
  )
}

export default sidebar