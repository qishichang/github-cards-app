import React, { useState } from 'react';
import './App.scss';
import CardList from './CardList';
import Form from './Form';

function App(props) {
  const [profiles, setProfiles] = useState([]);
 
  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData]);
  }

  return (
    <div>
      <div className='header'>
        {props.title}
      </div>
      <Form 
        onSubmit={addNewProfile} />
      <CardList 
        profiles={profiles} />
    </div>
  );
  
}

export default App;
