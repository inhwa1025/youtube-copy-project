import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import PlayVideo from './play_video/play_video';
import axios from "axios";
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

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
    <div className={styles.app}>
      <Header onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList 
            videoList={videos}
            onVideoClick={selectVideo}
            display={selectVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
      
      {/* <PlayVideo 
        Video={this.state.selectVideo}
      /> */}
    </div>
  );
}

export default App;
