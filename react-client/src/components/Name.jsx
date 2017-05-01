import React from 'react';

const Name = (props) => (
  <div>
    <h2>Name</h2>
    <input type='text' onChange={props.changeName}/>
    <button type='submit' onClick={props.submit}>Submit</button>
  </div>
)

export default Name;