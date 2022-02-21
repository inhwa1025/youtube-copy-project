import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import PlayVideo from './play_video/play_video';
import axios from "axios";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)//
    .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
    .mostPopular()//
    .then(videos => setVideos(videos));
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
