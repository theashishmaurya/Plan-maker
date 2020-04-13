import React from 'react';
import moment from 'moment';

const ProjectSummary=({project})=>{
    return(
        <div className="card z-depth-0  grey lighten-2 project-summary">
            <div className="card-content black-text">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="black-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>

            </div>
        

    )
}

export default ProjectSummary