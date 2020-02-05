import React from 'react';

function NavBar(props) {
    return (
        <nav className="navbar" id={props.id}>
        <div className="navbar-brand">{props.header}</div>

      </nav>
    )
}

export default  NavBar; 