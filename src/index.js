import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware, compose} from 'redux'
import RootReducer from './store/reducers/RootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {createFirestoreInstance,reduxFirestore,getFirestore} from 'redux-firestore'
import fbconfig from './config/fbconfig'
import firebase from 'firebase/app'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

//used a method called compose to compose all the enhancer/ Middleware we used here we used 3.
//compose is something like combine we used in rootreducer to combine all the reducers
const store = createStore(RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    
    reduxFirestore(firebase,fbconfig) // redux bindings for firestore
  )
);
const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};






function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
  <ReactReduxFirebaseProvider{...rrfProps}>
  <AuthIsLoaded>
    <App />
  </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
