import React, { Component } from 'react';
import './App.scss';
import { CardList } from './CardList';

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          {this.props.title}
        </div>
        <CardList />
      </div>
    );
  }
}

export default App;
