import './main.scss'
import React from 'react'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

const history = createBrowserHistory()

const reducers = combineReducers({
  router: connectRouter(history)
})

const _compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
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
