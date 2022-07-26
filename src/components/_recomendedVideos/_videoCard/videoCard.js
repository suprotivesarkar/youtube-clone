import { Avatar } from '@mui/material'
import React from 'react'
import './videoCard.css'
function videoCard({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='videoCard'>
        <img className='videoCard_thumbnail' src={image} alt=''/>
        <div className='video_info'>
          <Avatar className='videoCard_avatar' alt={channel} src = {channelImage}/>
          <div className='video_text'>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} ● {timestamp}</p>
          </div>
        </div>

    </div>
  )
}

export default videoCard