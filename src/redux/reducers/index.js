import {combineReducers} from "redux";

const reducers = ['items']

export default combineReducers(
    reducers.reduce((initial, name) => {
        initial[name] = require(`./${name}`).default
        return initial
    }, {})
)
