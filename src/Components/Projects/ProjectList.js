import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom'

const ProjectList=({Projects})=>{
    console.log(Projects);
    return(
        <div className="projectlist section">
        {/*Lets type some JSX*/}
        {Projects && Projects.map(project => {
            return (
                //Linking to project Detail page .
                <Link to = {'/project/' + project.id} >
                <ProjectSummary project = {project} key = {project.id}/> {/*passing  properties*/ }   
                </Link>
                )


        })}
            
            
    </div>


    )
}

export default ProjectList;