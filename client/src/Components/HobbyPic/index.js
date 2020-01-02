import React from 'react';

function Hobby(props) {

  return (
    <div key={props.topic.toString()} className={props.class} id={props.topic} onMouseEnter={() => props.onMouseEnter(props.topic)} onMouseLeave={props.onMouseExit}>
      <img src={props.src} className='hobby-pic' alt={props.topic} />
    </div>
  );

}

export default Hobby;