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
        
        case 'SINGUP_SUCCESS' :
            console.log("SINGUP_SUCCESSFULL")
            return {
                ...state,
                authError :null
            }

        case 'SINGUP_ERROR' :
            console.log('singup error')
            return {
                ...state ,
                authError : action.err.message
            }


        
        default :
            return{
                state
            }
    }
    
};

export default AuthReducer