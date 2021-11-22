import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk"

import allReducer from './reducers'

let store = createStore(allReducer, applyMiddleware(thunk))

export default store
