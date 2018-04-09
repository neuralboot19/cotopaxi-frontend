// Dependencias
import React, { Component } from 'react';

// Components
import Header from './Header/Header'
import Main from './Main/Main'
import Info from './Info/Info'
import Time from './Time/Time'
import Candidates from './Candidates/Candidates'
import axios from 'axios'

//Menu
import items from './Header/Menu/Menu'

class App extends Component {
  state = {
    candidates: []
  }
  componentDidMount() {
    axios.get(`https://cotopaxi-backend-api.herokuapp.com/candidates/`)
      .then(res => {
        console.log(res.data)
        const candidates = res.data;
        this.setState({ candidates });
      })
  }
  render() {
    return (
      <div className="App container">
      	<Header items={items} />
      	<Main />
      	<Info />
      	<Time />
        <Candidates candidates={this.state.candidates}/>
      </div>
    );
  }
}

export default App;
