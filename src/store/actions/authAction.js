import firebase from 'firebase'

const singIn = (credential) =>{
    return(dispatch , getState ) => {
        // setting firebase = getFirebase() so that we can use it 
       //const firebase = getFirebase();
       // we are getting 
       //check new firebase auth doc at https://gist.github.com/zenorocha/9282426622fc8f46a6caeff40008de75
        firebase.auth().signInWithEmailAndPassword(
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
export default singIn