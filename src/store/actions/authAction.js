const singIn = (credential) =>{
    return(dispatch , getState , {getFirebase}) => {
        // setting firebase = getFirebase() so that we can use it 
       const firebase = getFirebase();
       // we are getting 
        firebase.auth().singInwithEmailandPassword(
            credential.email,
            credential.password,
        ).then(()=>{
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
            }).catch((err)=>{
                dispatch({type: 'LOGIN_ERROR'})
        })


    }

}