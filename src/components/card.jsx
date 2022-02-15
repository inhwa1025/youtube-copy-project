import React, { Component } from 'react';
import styles from './card.module.css';

class Card extends Component {
  render() {
    return (
      <div className={styles.card} onClick={this.props.videoClick}>
        <img
          className={styles.thumbnails}
          src={this.props.thumbnails}
        />
        <span className={styles.content}>
          <li className={styles.videoTitle}>{this.props.videoTitle}</li>
          <li className={styles.channelTitle}>{this.props.channelTitle}</li>
        </span>
      </div>
    );
  }
}

export default Card;
