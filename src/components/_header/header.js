import React, {useState as UseState} from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu'
import  SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'
import AppIcon from '@mui/icons-material/Apps'
import { Avatar } from '@mui/material'
import {Link} from 'react-router-dom'

function header() {
  const [inputSearch, setInputSearch] = UseState("");
  return (
    <div className='header'>
        <div className='header_left'>
            <MenuIcon/>
            <Link to={`/`}>
            <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png' alt=' '/>
            </Link>
            </div>
      
        <div className='header_input'>    
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search' />
            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='header_inputButton'/>
            </Link>
          </div>
       
        
        <div className='header_icons'>
            <VideoCallIcon className='header_icons' />
            <AppIcon className='header_icons'/>
            <NotificationsIcon className='header_icons'/>
            <Avatar
            alt="Suprotive Sarkar" src="https://lh3.googleusercontent.com/ogw/AOh-ky3M1VX4RKq6UCIpFT7503tY4V1fbtoDxZCm8DGUkuo=s32-c-mo"
            />
        </div>

    </div>
  )
}

export default header