const initState  ={
    authError : null

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
                authError : null 
            }
        default :
            return{
                state
            }
    }
    
};

export default AuthReducer