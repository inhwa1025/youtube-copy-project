import React, { Component } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videoList, onVideoClick, display }) => (
  <div className={styles.videos}>
    {videoList.map(video =>(
      <VideoItem 
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </div>
);

export default VideoList;
