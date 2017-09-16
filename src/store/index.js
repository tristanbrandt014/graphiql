import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import reducers from "./reducers"
import initialStore from "./hydrate.js"

export default createStore(reducers, initialStore, applyMiddleware(logger))
