import React from "react";
import './ProjectsRoute.css'
import CodingLanguages from "../CodingLanguages";

function ProjectsRoute() {
  return (
        <div className="ProjectsRoute">
            <h1 class="font-weight-light">Projects</h1>
            <div class="ProjectsRoute-container">
                <CodingLanguages/>
                <CodingLanguages/>
                <CodingLanguages/>
            
                <div class="ProjectsRoute-content">
                    
                </div>
            </div>
        </div>
  );
}

export default ProjectsRoute;