import React, { Component } from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <li className={styles.container} onClick={props.videoClick}>
    <div className={styles.video}>
      <img
        className={styles.thumbnails}
        src={props.thumbnails}
        alt="video thumbnails"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{props.videoTitle}</p>
        <p className={styles.channel}>{props.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;