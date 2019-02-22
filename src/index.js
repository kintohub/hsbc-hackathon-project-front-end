import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './components/app'
import AuthContainer from './containers/AuthContainer'
import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <AuthContainer history={history}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </AuthContainer>
  </Provider>,
  target
)
