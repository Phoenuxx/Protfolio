import React, { Component } from 'react';

class Hobby extends Component {
    state = {
        active: true
    }
   
 
    hobbyHover = () => {
      
        this.setState({
          active: false,
        }) 
      this.props.activeHobbyName(this.props.alt);
      console.log(this.state);
       }
       
       hobbyLeave = () => {
        this.setState({
          active: true
        });
        console.log(this.state);
        // console.log(this.state.activeHobby);
       }

       render() {
        var test = this.state.active;

        return( 
        test ? 
          <div>
            <img src={this.props.src} alt={this.props.alt} id={this.props.id} className="hobby-pic" onMouseEnter={this.hobbyHover} onMouseLeave={this.hobbyLeave}></img>
          </div> : 
          <div>
            <img src={this.props.src} alt={this.props.alt} id={this.props.id} className="hobby-pic" onMouseEnter={this.hobbyHover} onMouseLeave={this.hobbyLeave}></img>
            <br />
            <div> <p className="hobby-words">{this.props.children}</p></div>
          </div>
    )
    }
}

export default Hobby;