import React from 'react';
import Child from './child';

const parent = (props) => {
  return(
    <div>
      <Child {...props} />
      <Child doWhatEver={props.changeTheWorldEvent} title={props.title} name={props.name}/>
      <Child doWhatEver={props.keepTheWorldSameEvent} title={props.title}/>
    </div>
  )
}

export default parent;


//when we need to pass everything from child to parent one of the way
//is to use '...' spread operator and this will everything coming
//grandfather to child
//    <Child {...props} />
