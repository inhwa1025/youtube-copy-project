import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import PlayVideo from './play_video/play_video';
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBBqYH4Y2P6B9SriMUcyj6viCRiXzllfS8`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBBqYH4Y2P6B9SriMUcyj6viCRiXzllfS8", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={style.app}>
      <Header onSearch={search}/>
      <VideoList 
        videoList={videos}
      />
      {/* <PlayVideo 
        Video={this.state.selectVideo}
      /> */}
    </div>
  );
}

export default App;
