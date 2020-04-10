import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import {combineReducers} from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers( {
    auth    : AuthReducer,
    project : ProjectReducer
});

export default RootReducer