import { Avatar } from '@mui/material'
import React from 'react'
import './channelRow.css'
// import { Verified } from '@mui/icons-material'
import { Verified} from '@mui/icons-material'

function channelRow({image, channel, subs, noOfVideos,description,verified}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={image}/>
        <div className='channelRow_text'>
            <h4>{channel}&nbsp;{verified && <Verified/>}</h4>
            <p>
                {subs} subscribers ● {noOfVideos} videos
            </p>
            <p>
                {description}
            </p>
        </div>
        </div>
  )
}

export default channelRow