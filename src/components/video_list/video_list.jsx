import React, { Component } from 'react';
import VideoItem from '../video_item/video_item';

class VideoList extends Component {
  videoClick(){
    alert("click")
  };

  render() {
    return (
      <div className="videoItem">
        {this.props.videoList.map(video =>(
          <VideoItem 
            key={video.id}
            videoTitle={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            thumbnails={video.snippet.thumbnails.medium.url}
            videoClick={this.videoClick}
          />
        ))}
        
      </div>
    );
  }
}

export default VideoList;
