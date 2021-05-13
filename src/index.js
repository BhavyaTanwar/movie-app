import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';
import './index.css';

const logger = ({ dispatch,getState }) => (next) => (action) => {
  console.log('ACTION',action)
  next(action);
}
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

