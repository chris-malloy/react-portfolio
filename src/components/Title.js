import React from 'react';

const Title = (props) => {
  return ( 
    <a id={props.id}>
      <h5 className="center white-text title">{props.title}</h5>
    </a>
  )
}

export default Title;