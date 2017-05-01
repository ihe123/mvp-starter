import React from 'react';

const MoodClick = (props) => (
<div>
  <input type='radio' name='mood' value='happy' onClick={props.radio}/> Happy
  <input type='radio' name='mood' value='sad' onClick={props.radio}/> Sad
  <input type='radio' name='mood' value='stressed' onClick={props.radio}/> Stressed
  <input type='radio' name='mood' value='bored' onClick={props.radio}/> Bored
</div>

)

export default MoodClick;