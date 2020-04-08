import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList=({Projects})=>{
    console.log(Projects);
    return(
        <div className="projectlist section">
        {/*Lets type some JSX*/}
        {Projects && Projects.map(project => {
            return (
                <ProjectSummary project = {project} key = {project.id}/> // passing  properties  
                )


        })}
            
            
    </div>


    )
}

export default ProjectList;