import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/E_West_CV.pdf";

export default function ViewCV() {
  return (
    <div className="App">

        <div>
            <div>
                <h1>E.West CV</h1>
                <Link to="/" class = "linkButton" id = "goHome">Go to Home</Link>
            </div>
            <div id = "cvView">
                <object
                    data={pdf}
                    type="application/pdf"
                    width="90%"
                    height="1000px"          
                >
                    <p>
                    Unable to display PDF file.{" "}
                    <a href={pdf} download>Download</a>{" "} instead.</p>
                </object>
            </div>
            
                
        </div>
    </div>

);
}