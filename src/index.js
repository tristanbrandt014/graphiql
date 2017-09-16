import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store from "./store"
import persistStore from "./store/persist"
import { Provider } from "react-redux"
import 'graphiql/graphiql.css'
import baseStyles from './styles'

persistStore()
baseStyles()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
