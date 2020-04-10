import React from 'react'
import {connect} from 'react-redux'
import {firestorConnect} from 'react-redux-firebase'

const ProjectDetails=(props) =>{
    let id = props.match.params.post_id;
    console.log(props);
    
    return (
    
       <div className="container section project-details">
           <div className="card">
               <div className="card-content">
                   <span className="card-title">Project tittle - {id}</span>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magni beatae voluptatem libero quaerat rerum id voluptate aliquam dolores aperiam. Autem unde ullam in earum distinctio molestiae recusandae corrupti modi?</p>
               </div>
               <div className="card-action grey lighten-3 grey-text">
                   <p>Posted by Ashish Maurya</p>
                   <p>todays date</p>
               </div>
           </div>
       </div>
    )
}

export default ProjectDetails
