import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import moment from 'moment'

const ProjectDetails=(props) =>{
    // let id = props.match.params.post_id;
  //console.log(props);
    const {project} = props;
    if(project) {
    
    return (
    
       <div className="container section project-details">
       <div className="center">
           <h1 className="center">Plan Details</h1>
       </div>
           <div className="card">
               <div className="card-content">
                   <span className="card-title">{project.title}</span>
                   <p>{project.content}</p>
               </div>
               <div className="card-action grey lighten-3 grey-text">
                   <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                   <p>{moment(project.createdAt.toDate()).calendar()}</p>
               </div>
           </div>
       </div>
    )
 }
 else {
     return (
         <div className="center">
         <h1>Loading.....</h1>

         </div>
     )
 }
}

const mapStatetoProps=(state,ownProps)=>{
    //console.log(state)
    const id = ownProps.match.params.post_id; //setting the id = route parameter id :p the id in the url
    const projects = state.firestore.data.projects ; // just to not type a lot so we creating a shortcut variable
    const project = projects ? projects[id]: null //

    
    return{
        project : project 
        
}
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([{
        collection : 'projects'
    }])
)( ProjectDetails)
