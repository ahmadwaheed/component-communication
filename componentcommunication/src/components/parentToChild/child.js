import React from 'react';

const child = (props) => {
    return(
      <div>
        <button onClick={props.doWhatEver}>{props.title} {props.name}</button>
      </div>
    )
}

export default child;

//doWhatEver is a property on onClick event handler 
