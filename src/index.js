import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { visitor } from './ga'

import sketchLogosApp from './reducers'
import App from './components/App'
import './stylesheets/main.css'
import { fetchLogos } from './actions'
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

store.dispatch(fetchLogos("logo"))
visitor.pageview('/', 'com.iconscout.sketch.logodrop').send()