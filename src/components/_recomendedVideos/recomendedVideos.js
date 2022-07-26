import React from 'react'
import VideoCard from './_videoCard/videoCard.js'
import './recomendedVideos.css'
function recomendedVideos() {
  return (
    <div className='recomendedVideos'>
      <h2>Recomended Videos</h2>
      <div className='recomendedVideos_videos'>
        <VideoCard 
          title="Shamshera Official Trailer | Ranbir Kapoor | Sanjay Dutt"
          views="223K Views"
          timestamp="4 weeks ago"
          channelImage="https://yt3.ggpht.com/CDMg1K5YlWXVQvZFQMU9rGgbB4Avjqj6LaQ3D6laHCNLzYvAYn1INqPCmxq3hOSHYfEvyDPP=s68-c-k-c0x00ffffff-no-rj"
          channel="YRF"
          image="https://i.ytimg.com/vi/UHYUeZ8JszQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4IPO-Yi8S8mZ9jIQx8vnHeRNBWg"
        />
        <VideoCard 
          title="🔴 Let's Learn More About REACT JS | For Beginners"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
        />
        <VideoCard 
          title="Stormfront vs. The Girls | The Boys Clip | Prime Video"
          views="253K Views"
          timestamp="5 days ago"
          channelImage="https://yt3.ggpht.com/3b9SS-66t6V_AfGgaiTgaylOvn6cB8GUBnGV0Q2DMn9PWn6MIzzseiMz-d0UpGrQdhEMl3AwT38=s68-c-k-c0x00ffffff-no-rj"
          channel="Amazon Prime"
          image="https://i.ytimg.com/vi/CnQhLoSO6Eg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOSh8mdtr5IIdkyzDS1RNdCRTG6w"
        />
        <VideoCard 
          title="Carbon Lang . . . The C++ killer?"
          views="280K Views"
          timestamp="1 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLR5CDv14gL4DQ7I4gxIlBMY6u-CNsq2qfeev48R2g=s68-c-k-c0x00ffffff-no-rj"
          channel="Code Report"
          image="https://i.ytimg.com/vi/-bHK0qmp06c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCywalyjgBG24HPnDMKh_8_JTLfnw"
        />
        
      </div>
    </div>
  )
}

export default recomendedVideos