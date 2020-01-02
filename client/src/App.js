import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import profilePic from './images/arctic_fox.jpg';
import AUFC from './images/aufc.png';
import Bio from './images/bio-inf.png';
import NGNL from './images/NGNL.png';
import Blend from './images/blender-logo.png';
import Akatsuki from './images/akatsuki-face.png'
import Hobby from './Components/HobbyPic';
import Descript from './Components/Description';
import Project from './Components/Project';
import RPG from './images/project_photos/RPG-preview.JPG';
import Trivia from './images/project_photos/Trivia-preview.JPG';
import Train from './images/project_photos/train-preview.gif';
import Giphy from './images/project_photos/giphy-preview.JPG';
import Geo from './images/project_photos/geograph-preview.JPG';

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
    this.setState({ activeHobby: newHobby });
    console.log(this.state.activeHobby);
  }
  handleOnMouseExit = () => {
    this.setState({ activeHobby: 'null' });
    console.log(this.state.activeHobby);
  }
  render() {
    return (
      <Container>
        <Navbar header="Brandon Stevenson" />
        <Container class="about-me" >
          <img src={profilePic} id="profile-pic" alt="Brandon Stevenson" />
          <p id="pitch-summary">
            Hi! I'm Brandon Stevenson, a fledgling full-stack web developer with plenty still to learn and an ever growing desire to get better at everything I set my sights on
            to achieve my goals in life.  I'm an alumni of Georgia Tech's Full-stack Web Development boot camp.  My time working as a Data Entry Clerk in the logistics industry has strengthened my
            ability to adapt to ever changing work conditions and piece together whole pictures from partial or minimal details quickly and effectively, all while honing
            my ability to balance quality with quantity/speed. I won't go as far as to say I enjoy reading lengthy code documentation but I am a quick learner and enjoy overcoming a good challenge.
            The gamer in me has always looked at programmers with admiration ever since I was little and I'm hoping to jump into the field through web development to hopefully make a positive impact
            on someone else's life one day.
          </p>
        </Container>
        <Navbar header="Hobbies" />
        <Container class="hobbies">
          <Container class="row" id="hobbies-hori">
            <Hobby src={Akatsuki} class={'hobby-info horiz col-4'} topic={'reading'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
            <Hobby src={AUFC} class={'hobby-info horiz col-4'} topic={'AUFC'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
            <Hobby src={Bio} class={'hobby-info horiz col-3'} topic={'Game'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
          </Container>
          <Container class="row" id="hobbies-vert" >
            <Container class="col-3">
              <Hobby src={NGNL} class={'hobby-info vert row'} topic={'Anime'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={Blend} class={'hobby-info vert row'} topic={'Blender'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
            </Container>
            <Container class="col-8 hobby-cont">
              <Descript topic={this.state.activeHobby} class={'hobby-des'} />
            </Container>
          </Container>
        </Container>

        <Navbar header="Portfolio" />
        <Container class="portfolio">
          <Project src={RPG} alt="RPG Game" id="rpg-preview" gitLink="https://github.com/Phoenuxx/unit-4-game" appLink="https://phoenuxx.github.io/unit-4-game/" />
          <Project src={Trivia} alt="Trivia Game" id="trivia-preview" gitLink="https://github.com/Phoenuxx/TriviaGame" appLink="https://phoenuxx.github.io/TriviaGame/" />
          <Project src={Train} alt="Train Scheduler" id="train-preview" gitLink="https://github.com/Phoenuxx/train-time" appLink="https://phoenuxx.github.io/train-time/" />
          <Project src={Giphy} alt="Giphiphy Generator" id="giphy-preview" gitLink="https://github.com/Phoenuxx/giphiphy-api" appLink="https://phoenuxx.github.io/giphiphy-api" />
          <Project src={Geo} alt="Doggie Date Currently Broken..." id="geo-preview" gitLink="https://github.com/rlau4/Project2" appLink="#" /> {/*weird positioning needs fixing, slightly higher than other Projects...??? */}

        </Container>
      </Container>
    );
  }
}

export default App;
