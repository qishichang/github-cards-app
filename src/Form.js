import React, { useState } from "react";
import axios from "axios";

function Form(props) {

  const [userName, setUserName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data);
    setUserName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Github username"
        value={userName} 
        onChange={(event) => setUserName(event.target.value)}/>
      <button>Add card</button>
    </form>
  );
}

export default Form;
