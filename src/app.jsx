import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import Videos from './components/videos';
import axios from "axios";

class App extends Component {
  state = {
    loading: false,
    ItemList: []
  };

  loadItem = async () => {
    axios
      .get('./popularexample.json')
      .then(popular => {
        this.setState({ 
          loading: true,
          ItemList: popular.data.items
        });
      })
      .catch(e => {  // API 호출이 실패한 경우
        console.error(e);  // 에러표시
        this.setState({  
          loading: false
        });
      });
  };

  componentDidMount() {
    this.loadItem();  // loadItem 호출
  };

  render() {
    return (
      <>
        <Header />
        <Videos 
          videoList={this.state.ItemList}
        />
      </>
    );
  }
}

export default App;
