import React, { Component } from 'react';
import './App.scss';
import { CardList } from './CardList';
import { testData } from './TestData'
import Form from './Form';

class App extends Component {
  state = {
    profiles: testData
  }
  render() {
    return (
      <div>
        <div className='header'>
          {this.props.title}
        </div>
        <Form />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
