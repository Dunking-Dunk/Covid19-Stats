import { combineReducers } from "redux";

import covid19Reducer from './covid19Reducer'
import covid19NewsReducer from "./covid19NewsReducer";
import vaccineReducer from './vaccineReducer'

export default combineReducers({
    covid: covid19Reducer,
    news: covid19NewsReducer,
    vaccine: vaccineReducer
})