import React from 'react';

function Container(props) {
    return <div className={props.class} id={props.id}>{props.children}</div>
}

export default Container;