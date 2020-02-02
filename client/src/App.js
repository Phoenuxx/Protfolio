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

class App extends Component {



  constructor(props) {
    super(props);

    this.state = {
      activeHobby: "null",

    };

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseExit = this.handleOnMouseExit.bind(this);
    this.handleScrollTOTop = this.handleScrollToTop.bind(this);
  }


  handleScrollToTop = () => {
    const elmnt = document.getElementById("top");
    elmnt.scrollIntoView();
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
        <Navbar header="Brandon Stevenson" id="top" />
        <Container id="about-me" class="row" >
          <div className="col-1 col-sm-2 col-md-3 col-lg-3" />
          <img src={profilePic} id="profile-pic" className="col-10 col-sm-8 col-md-6 col-lg-6" alt="Brandon Stevenson" />
          <div className="row">
            <p id="pitch-summary" className="col-11 col-sm-8 col-md-10 col-lg-6">
              I'm a fledgling full-stack web developer with plenty still to learn and an ever growing desire to get better at everything I set my sights on.
              I'm an alumni of Georgia Tech's Full-Stack Web Development boot camp. Through the 6 month course I trained in the MERN stack and as an inevitable result my primary skill is with Javascript/Jquery.
              I also became adept with what my instructor liked to call "Google-fu".
              As my knowledge base grows I coninue to be amazed at just how much more there is to learn, and I can't help but feel that I've only seen a piece of the whole pie. As I get more familiar/comfortable with javascript I hope to branch out into languages such as python, Java and C# to broaden my potential.
              My experience working in Data Entry with the logistics industry has strengthened my
              ability to adapt to ever changing work conditions and piece together whole pictures from partial or minimal details quickly and effectively, all while honing
              my ability to balance quality with quantity/speed. That experience I feel has gone a long way towards improving my ability to debug my and my teammates code as we work. I won't go as far as to say I enjoy reading lengthy code documentation but I feel my ability to learn quickly is worth bragging about and i enjoy overcoming a good challenge.
            </p>
          </div>
        </Container>
        <Navbar header="Hobbies" />
        <Container class="hobbies row">
          <Container class="row" id="hobbies-hori">
            <Container class="col-7 col-md-6 col-lg-6">
              <Hobby src={Akatsuki} class={'horiz other'} topic={'reading'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={AUFC} class={'horiz'} topic={'aufc'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={Bio} class={'horiz'} topic={'game'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={NGNL} class={'horiz'} topic={'anime'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
              <Hobby src={Blend} class={'horiz'} topic={'blender'} onMouseEnter={this.handleOnMouseEnter} onMouseExit={this.handleOnMouseExit} />
            </Container>
            <Container class="col-4 col-md-5 col-lg-5 hobby-cont">
              <Descript topic={this.state.activeHobby} class={'hobby-des'} />
            </Container>
          </Container>
        </Container>
        <Navbar header="Portfolio" />
        <Container id="portfolio" class="row">
          <Container class="portfolio-buffer col-2 col-md-4" />
          <Project src={RPG} alt="RPG Game" id="rpg-preview" gitLink="https://github.com/Phoenuxx/unit-4-game" appLink="https://phoenuxx.github.io/unit-4-game/" />
          <Container class="portfolio-buffer col-2" /><Container class="portfolio-buffer col-2" />
          <Project src={Trivia} alt="Trivia Game" id="trivia-preview" gitLink="https://github.com/Phoenuxx/TriviaGame" appLink="https://phoenuxx.github.io/TriviaGame/" />
          <Container class="portfolio-buffer col-2" /><Container class="portfolio-buffer col-2" />
          <Project src={Train} alt="Train Scheduler" id="train-preview" gitLink="https://github.com/Phoenuxx/train-time" appLink="https://phoenuxx.github.io/train-time/" />
          <Container class="portfolio-buffer col-2" /><Container class="portfolio-buffer col-2" />
          <Project src={Giphy} alt="Giphiphy Generator" id="giphy-preview" gitLink="https://github.com/Phoenuxx/giphiphy-api" appLink="https://phoenuxx.github.io/giphiphy-api" />
        </Container>
        <button onClick={this.handleScrollToTop} id="backToTopBtn">BACK TO TOP</button>
      </Container>
    );
  }
}

export default App;
