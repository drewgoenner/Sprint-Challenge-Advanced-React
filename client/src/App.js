import React from 'react';
import PlayerList from './components/PlayerList';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      playersData: []
    }
    
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => this.setState({playersData: res.data}))
    
    .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.playersData)
    return(
      <div className="App">
        <PlayerList playersData={this.state.playersData} />

      </div>
    )
  }
  
}

export default App;
