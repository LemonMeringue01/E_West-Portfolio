import React from "react";
import { Link } from "react-router-dom";
import border from "../assets/border.jpg";
import pic from "../assets/pic.png";


export default function Home() {
  return (
    <div className="Home">
      
        <div className="SideBar">
            <img id = "hero" src = {pic}></img>
            <h1>Hello and welcome to E.West's Archive.</h1><h1 id="BlinkThis">|</h1>
            <h5>Current BSc Computing Science student of the University of Glasgow[2023-2027]. Committed to finding effective solutions that elevate and expand on your expertise.</h5>
            <Link to="/ViewCV" class = "linkButton">Go to CV</Link>       

        </div>
        <div class = "MainContent">
            <div className="HeroSection">
                <h1>Hello and welcome to E.West's Archive.</h1><h1 class = "inlineTexts">About </h1><h1 class = "inlineTexts" id="BlinkThis"> |</h1>
                <h5>Current 3rd Year BSc Computing Science student of the University of Glasgow, committed to finding effective solutions that elevate and expand on your expertise.</h5>
                <Link to="/ViewCV" class = "linkButton">Go to CV</Link>
            </div>

            <div className="BackgroundSection">
                <h1>My Approach</h1>
                <h5>Taking an interdisciplinary approach to problem solving in technology, my interests are widespread. Drawing from Art, Physics, Mathematics, Psychology, Music and Language, I aspire to create software that truly suit the needs of clients and their wider audiences.</h5>
                <h5>I am currently working to build my proficiency in Web Development, alongside Data Science. The information in this page will be duly updated to reflect this in the coming months.</h5>
            </div>
            
            <div className="SkillSection">
                <h1>Technical Skills</h1>
                <h5>To be updated.</h5>
                <div class = "SkillsFlex">
                <div class = "SkillBox"></div>
                </div>
            </div>
            
            <div className="ProjectSection">
                <h1>My Projects</h1>
                <h5>To be updated.</h5>
            </div>
            
            <div className="ContactSection">
                <h1>Contact Me</h1>
                <a class = "contactLink" href = "https://www.linkedin.com/in/elis-west-a47701306/" target="_blank">LinkedIn</a>
                <a class = "contactLink" href = "https://github.com/LemonMeringue01" target="_blank">GitHub</a>
            </div>
        </div>
    </div>      

    );
}
