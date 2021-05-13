import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import movies from './reducers';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
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

