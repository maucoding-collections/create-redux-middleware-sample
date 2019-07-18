import Users from "../store/users/reducer"
import apiMiddleware from "../store/middlewares/api"
import logMiddleware from "../store/middlewares/logger"
import { createStore, applyMiddleware, combineReducers } from "redux"

let Middlewares

// if production or load by server
if (process.env.NODE_ENV == "production" || typeof window == "undefined") {
  Middlewares = applyMiddleware(logMiddleware, apiMiddleware)
} else {
  Middlewares = applyMiddleware(logMiddleware, apiMiddleware)
}

const preloadedState = typeof window != "undefined" ? window.__data__ : {}

// combine reducers here
const Reducers = combineReducers({
  Users
})

export default createStore(Reducers, preloadedState, Middlewares)
