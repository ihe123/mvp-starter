import React from 'react';

const Gallery = (props) => (
  <div>
    {props.data.map((picture)=>(<img src={picture.link}/>))}
    {console.log('dataaaaaa', props.data)}
    
  </div>
)

export default Gallery;