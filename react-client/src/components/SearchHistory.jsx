import React from 'react';

const SearchHistory = (props) => (
  <div>
    <input type='text' onChange={props.nameSearch}/>
    <button type='submit' onClick={props.lookup}>Lookup</button>
  </div>

)

export default SearchHistory;