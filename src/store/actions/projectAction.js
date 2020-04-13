
const createProject = (recievedProject) =>{
    //this is how we normally created our action in a aobject form
    // return{
    //     type       : 'Add_Project',
    //     newProject : recievedProject 
    // }
    //But in thunk we do 
    // In thunk we pause / take a halt for the Asyc task and then we call the dispatch function ....
    return(dispatch ,getState,{getFirestore})=>{
        //variables for Name of user 
        const profile = getState().firebase.profile;
        const Userid = getState().firebase.auth.uid;
        //lets create a variable and store our function on that for ease
        const firestore = getFirestore() ;
        //we are adding data to our firebase database that we have created from create project
        firestore.collection('projects').add({
            //using .spreader     
            ...recievedProject,
            authorFirstName : profile.first_name,
            authorLastName : profile.last_name,
            authorID        : Userid,
            createdAt       : new Date()
        // after above async thing is  done then we dispatch this below function
        }).then(()=>{
            dispatch({
                type       : 'Add_Project',
                newProject : recievedProject

        // In case we catch an error we gonna dispatch below function

        })
    }).catch((err)=>{
            dispatch({
                type : 'Add_Project_Error',
                err


            })
        })
        //old code
        // // any Asyc call to database goes here
        // // then we dispatch it 
        // dispatch({
        //     type       : 'Add_Project',
        //     newProject : recievedProject

        

    }
}
export default createProject;