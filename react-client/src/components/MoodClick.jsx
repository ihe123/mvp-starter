import React from 'react';

const MoodClick = (props) => (
<div>
  <input type='radio' name='mood' value='happy' onClick={props.radio}/> Happy
  <input type='radio' name='mood' value='sad' onClick={props.radio}/> Sad
</div>

)

export default MoodClick;