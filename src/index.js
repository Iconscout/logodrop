import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sketchLogosApp from './reducers'
import App from './components/App'
import './stylesheets/main.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'

let store = createStore(
	sketchLogosApp,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
