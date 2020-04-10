import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware, compose} from 'redux'
import RootReducer from './store/reducers/RootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {ReactReduxFirebase,getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {createFirestoreInstance,reduxFirestore,getFirestore} from 'redux-firestore'
import fbconfig from './config/fbconfig'
import firebase from 'firebase/app'
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


ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
  <ReactReduxFirebaseProvider{...rrfProps}>
    <App />
  </ReactReduxFirebaseProvider>
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
