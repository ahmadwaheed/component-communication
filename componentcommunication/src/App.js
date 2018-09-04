import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/parentToChild/child';
import Parent from './components/parentToChild/parent';

class App extends Component {
    state = {
      title: 'placeholder title',
      name: 'waheed'
    }

changeTheWorld = (newTitle) => {
  this.setState({
    title: newTitle,
    name: 'ahmad'
  });
}

  render() {
    return (
      <div className="App">
          <Parent changeTheWorldEvent={this.changeTheWorld.bind(this,'new World')}
            title={this.state.title} name={this.state.name}
          keepTheWorldSameEvent={this.changeTheWorld.bind(this,'same World')} />
      </div>
    );
  }
}

export default App;
