import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import PlayVideo from './components/playVideo';
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <VideoList 
        videoList={videos}
      />
      {/* <PlayVideo 
        Video={this.state.selectVideo}
      /> */}
    </>
  );
}

// class App extends Component {
//   state = {
//     apiLoading: false,
//     ItemList: []
//   };

//   loadItem = async () => {
//     axios
//       .get('./popularexample.json')
//       .then(popular => {
//         this.setState({ 
//           apiLoading: true,
//           ItemList: popular.data.items
//         });
//       })
//       .catch(e => {  // API 호출이 실패한 경우
//         console.error(e);  // 에러표시
//         this.setState({  
//           apiLoading: false
//         });
//       });
//   };

//   componentDidMount() {
//     this.loadItem();  // loadItem 호출
//   };

//   render() {
//     return (
//       <>
//         <Header />
//         <Videos 
//           videoList={this.state.ItemList}
//         />
//         <PlayVideo 
//           // Video={this.state.selectVideo}
//         />
//       </>
//     );
//   }
// }

export default App;
