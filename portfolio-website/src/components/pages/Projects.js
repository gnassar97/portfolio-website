import React from "react";
import './Projects.css'
import CodingLanguages from "../CodingLanguages";
import { useParams } from "react-router-dom";
import projectContent from './project-content';

const Projects = () => {
    let { name } = useParams();
    const article = projectContent.find(article => article.name === name);


    if (!article) return <div className="Projects"><h1>Article does not exist!</h1></div>
    return (
        <>
            <div className="Projects">
                <div class="Projects-container">
                    <div class="Projects-content">
                    <h1 class="font-weight-light">{article.title}</h1>
                    {article.content.map((paragraph, key) => (
                        <p key={key}>{paragraph}</p>
                     ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;