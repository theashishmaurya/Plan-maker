const initState  ={
   posts : [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},

    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},

     {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    
    ] 
    

}

const ProjectReducer = (state = initState  , action) => {
    // cases to handle different type of action we have dispatched 

    switch(action.type){
        // case to handle the Add_Project dispatch
        case 'Add_Project' :
            console.log('created project',action.newProject);
            return state;
        // case to handle the Add_Project_Error
        case 'Add_Project_Error' :
            console.log('Add Project Error',action.err);
            return state ;
        default :
            return state;

    }
    
}

export default ProjectReducer ;