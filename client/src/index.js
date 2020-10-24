import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App />
    </Provider>
    </BrowserRouter>, 
  document.getElementById('root')
  );

