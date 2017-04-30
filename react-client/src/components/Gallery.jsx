import React from 'react';

const Gallery = (props) => (
  <div>
      {props.data.slice(0, 25).map((picture, index)=>(<img key={index} width='150' src={picture.link} />))}
  </div>
)

export default Gallery;