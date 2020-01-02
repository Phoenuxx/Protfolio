import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import profilePic from './images/arctic_fox.jpg';
import AUFC from './images/aufc.png';
import Bio from './images/bio-inf.png';
import NGNL from './images/NGNL.png';
import Blend from './images/blender-logo.png';
import Hobby from './Components/HobbyPic';
import Descript from './Components/Description';



class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      activeHobby: "null"
    };

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseExit = this.handleOnMouseExit.bind(this);
  }

handleOnMouseEnter = (newHobby) => {
  this.setState({activeHobby: newHobby});
  console.log(this.state.activeHobby);
}
handleOnMouseExit = () => {
  this.setState({activeHobby: 'null'});
  console.log(this.state.activeHobby);
}
  render() {
    return (
      <Container>
        <Navbar />
        <Hobby src={profilePic}  topic={'profile-pic'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit}/>
        <Hobby src={AUFC}  topic={'AUFC'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit}/>
        <Hobby src={Bio}  topic={'Game'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit}/>
        <Hobby src={NGNL}  topic={'Anime'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit}/>
        <Hobby src={Blend}  topic={'Blender'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit}/>
        <Descript topic={this.state.activeHobby}/>
      </Container>
    );
  }
}

export default App;
