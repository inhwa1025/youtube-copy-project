import React, { Component } from 'react';
import styles from './video_item.module.css';

class VideoItem extends Component {
  render() {
    return (
      <li className={styles.container} onClick={this.props.videoClick}>
        <div className={styles.video}>
          <img
            className={styles.thumbnails}
            src={this.props.thumbnails}
            alt="video thumbnails"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{this.props.videoTitle}</p>
            <p className={styles.channel}>{this.props.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoItem;