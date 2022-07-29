import React from 'react'
import VideoCard from './_videoCard/videoCard.js'
import './recomendedVideos.css'
import {fetchHomeData} from '../../api/youtube'


class recomendedVideos extends React.Component{
  state = {
    videos:[],
  };
  
  componentDidMount() {
    fetchHomeData()
    .then((res) => res.json())
      .then((result) => {
        console.log("newsData", result.items);
        this.setState({ videos: result.items });
      });
  }
  
  
  render(){
  return (
    <div className='recomendedVideos'>
      <h2>Recomended Videos</h2>
      <div className='recomendedVideos_videos'>

      {this.state.videos.map((videos) => {
        return <VideoCard 
        title={videos.snippet.title}
        views={videos.statistics.viewCount}
        timestamp={videos.snippet.publishedAt}
        channelImage=""
        channel={videos.snippet.channelTitle}
        image={videos.snippet.thumbnails.high.url}
         />;
      })}
      
      </div>
    </div>
  )
}
}
export default recomendedVideos