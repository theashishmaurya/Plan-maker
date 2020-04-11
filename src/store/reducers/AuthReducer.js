const initState  ={
    authError : null,
    authSuccess : null

}

const AuthReducer = (state = initState  , action) => {
    switch(action.type){
        case 'LOGIN_ERROR' :
            console.log('login error');
            return{
                ...state ,
                authError : 'Login Failed'
            }
        case 'LOGIN_SUCCESS' :
            console.log('Login success') 
            return{
                authSuccess : 'Login Successfull' 
            }
        case 'LOGED_OUT' :
            console.log("logout success")
            return state
        case 'LOGOUT_ERROR' :
            console.log("logout Error")
            return state

        
        default :
            return{
                state
            }
    }
    
};

export default AuthReducer