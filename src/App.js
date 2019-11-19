import React, { Component } from 'react';
import './App.scss';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          {this.props.title}
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
