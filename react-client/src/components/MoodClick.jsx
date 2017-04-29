import React from 'react';

const MoodClick = (props) => (
<div>
  
  <input type='radio' name='mood' value='happy'/> Happy
  <input type='radio' name='mood' value='sad'/> Sad

  <h2>Full Name</h2>
  <input type='text'/>
  <button type='submit'>Submit</button>
</div>

)

export default MoodClick;