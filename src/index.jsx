import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { wishlistReducer } from './reducers/wishlistReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


console.log('auth', authReducer)

const rootReducer = combineReducers({
  auth: authReducer,
  list: wishlistReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(() => {
  const render = (Component) => {
    ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>,
      document.getElementById('react-app-root')
    );
  };
  render(App);
})
  console.log('this is store', store);



/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
