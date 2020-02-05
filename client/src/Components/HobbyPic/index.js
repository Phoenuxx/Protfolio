import React from 'react';

function Hobby(props) {

  return (
    <div key={props.topic.toString()} className={props.class}  >
      <img src={props.src} id={props.topic} className='hobby-pic' alt={props.topic} onMouseEnter={() => props.onMouseEnter(props.topic)} onMouseLeave={props.onMouseExit}/>
    </div>
  );
}

export default Hobby;