import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import movies from './reducers';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers';

const logger = function ({ dispatch,getState }){
  return function (next){
    return function(action){
      //middleware code
      //console.log('ACTION_TYPE = ',action.type),
      next(action);
    }
  }
}
const store = createStore(rootReducer,applyMiddleware(logger));
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
ReactDOM.render(
    <App 
      store={store}
    />,
  document.getElementById('root')
);

