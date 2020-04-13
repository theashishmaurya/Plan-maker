import firebase from 'firebase';

import  { db } from '../../config/fbconfig';

export const SingIn = (credential) =>{
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
                dispatch({type: 'LOGIN_ERROR' , err})
        })


    }

}
export const SingOut = () => {
    return (dispatch , getState) => {
        firebase.auth().signOut().then(()=>{
            dispatch({
                type: 'LOGED_OUT'
            })
        }).catch((err)=>{
            dispatch ({
                type :'LOGOUT_ERROR' ,err
            })

        }
            
        )}

}

export const singUp = (newUser) =>{
    return (dispatch , getState ,{getFirestore}) =>{
        if(newUser.password !== newUser.confirm_password){
            dispatch({type: "SINGUP_PASS_ERROR"})
        }
        //const firestore = getFirestore();
        else{
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return db.collection('users').doc(resp.user.uid).set({
            
                first_name : newUser.first_name,
                last_name : newUser.last_name,
                initial : newUser.first_name[0] + newUser.last_name [0]
            });
        }).then(()=>{
            dispatch({type : 'SINGUP_SUCCESS'});
        }).catch((err)=>{
            dispatch({type: 'SINGUP_ERROR' , err})
        })
    }
} 
}


