import React from 'react';

const ProjectSummary=({project})=>{
    return(
        <div className="card z-depth-0  grey lighten-2 project-summary">
            <div className="card-content black-text">
                <span className="card-title">{project.title}</span>
                <p>Posted by Ashish Maurya</p>
                <p className="black-text">Todays date, time</p>
            </div>

            </div>
        

    )
}

export default ProjectSummary