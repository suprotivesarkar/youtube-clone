import { TuneOutlined } from '@mui/icons-material'
import React from 'react'
import './searchPage.css'
import ChannelRow from './_channelRow/channelRow'
import VideoRow from './_videoRow/videoRow'

function searchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
        <TuneOutlined/>
        <h2>FILTER</h2>
        </div>
        <hr/>

        <ChannelRow
        image="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Netflix India"
        verified
        subs="18.6M"
        noOfVideos={854}
        description="Netflix  is the world's leading streaming entertainment service with 204 million paid memberships in over 190 countries enjoying..."
        />
        <hr/>

        <VideoRow
        views="7.1M"
        subs="18.6M"
        description="Eddie Munson absolutely shredding on the guitar in the Upside Down? Consider my ticket bought. Stranger Things 4 Volume 2 is now streaming, only on Netflix"
        timestamp="3 weeks ago"
        channel="Netflix India"
        title="Stranger Things 4 | Eddie Munson's Upside Down Guitar Scene | Netflix India"
        image="https://i.ytimg.com/vi/dmIFhpQe9Zk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCduFWLkDFfQQ6o5R0Q2za3LiPfZQ"
        />
        <VideoRow
        views="7.1M"
        subs="18.6M"
        description="Eddie Munson absolutely shredding on the guitar in the Upside Down? Consider my ticket bought. Stranger Things 4 Volume 2 is now streaming, only on Netflix"
        timestamp="3 weeks ago"
        channel="Netflix India"
        title="Stranger Things 4 | Eddie Munson's Upside Down Guitar Scene | Netflix India"
        image="https://i.ytimg.com/vi/dmIFhpQe9Zk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCduFWLkDFfQQ6o5R0Q2za3LiPfZQ"
        />
        </div>
  )
}

export default searchPage