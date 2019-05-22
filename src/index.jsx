import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';
import { wishlistReducer } from './reducers/wishlistReducer';


console.log('auth', authReducer)

const rootReducer = combineReducers({
  auth: authReducer,
  list: wishlistReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));
  console.log('this is store', store);

  // let unsubscribe = store.subscribe(() =>
  //   console.log('state', store.getState())
  // )


const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  )
}

render(App)

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
