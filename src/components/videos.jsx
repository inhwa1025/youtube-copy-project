import React, { Component } from 'react';
import Card from './card';

class Videos extends Component {
  videoClick(){
    alert("click")
  };

  render() {
    console.log(this.props.videoList);
    return (
      <div className="videoCard">
        {this.props.videoList.map(video =>(
          <Card 
            videoId={video.id}
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

export default Videos;
