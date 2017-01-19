
import {combineReducers} from 'redux'
import handlesReducer from './handlesReducer'
import handlesCallStateReducer from './handlesCallStateReducer'

export default combineReducers({
    handles: handlesReducer,
    handlesCallState: handlesCallStateReducer
})