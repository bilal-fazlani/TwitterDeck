
import {combineReducers} from 'redux'
import handlesReducer from './handlesReducer'

export default combineReducers({
    handles: handlesReducer
})