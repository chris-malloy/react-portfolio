import React from 'react';

const Title = (props) => {
  return ( 
    <div id={props.id}>
      <a>
        <h5 className="center white-text title">{props.title}</h5>
      </a>
    </div>
  )
}

export default Title;