import React from 'react';
// import NameInput from './ListItem.jsx';

const NameInput = (props) => (
  <div>
    <form>
      <label>
        First and Last Name:
        <input type="text" name="name"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
)

export default NameInput;
   