const createProject = (recievedProject) =>{
    //this is how we normally created our action in a aobject form
    // return{
    //     type       : 'Add_Project',
    //     newProject : recievedProject 
    // }
    //But in thunk we do 
    // In thunk we pause / take a halt for the Asyc task and then we call the dispatch function ....
    return(dispatch ,getstate)=>{
        // any Asyc call to database goes here
        // then we dispatch it 
        dispatch({
            type       : 'Add_Project',
            newProject : recievedProject

        })

    }
}
export default createProject;