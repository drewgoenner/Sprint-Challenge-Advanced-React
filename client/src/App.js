import React from 'react';
import PlayerList from './components/PlayerList';
import './App.scss';
import NavBar from './components/NavBar';
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
    
    return(
      <div className="App">
        <NavBar />
        <PlayerList playersData={this.state.playersData} />

      </div>
    )
  }
  
}

export default App;
