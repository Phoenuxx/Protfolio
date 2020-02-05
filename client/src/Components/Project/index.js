import React from "react";
import GitLogo from '../../images/github-logo.svg';

function Project(props) {
    return (
        <div className="project-mini col-8 col-lg-4 col-xl-2">
            <img src={props.src} alt={props.alt} className="project-mini-pic" id={props.id} />
            <div className="overlay">
                <div class="project-title">
                    <h2><a href={props.appLink} target="_blank"> {props.alt} </a></h2>
                    <a href={props.gitLink} target="_blank"><img src={GitLogo} className="git"/></a>
                </div>
            </div>
        </div>
    )
}

export default Project;