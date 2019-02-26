import './main.scss'
import React from 'react'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import App from './components/app'

const history = createBrowserHistory()

const reducers = combineReducers({
	foo: (state = {}) => state,
})

const _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	connectRouter(history)(reducers),
	{},
	_compose(
		applyMiddleware(
			routerMiddleware(history)
		)
	)
)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
)
