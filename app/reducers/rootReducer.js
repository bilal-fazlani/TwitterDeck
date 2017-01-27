
import {combineReducers} from 'redux'
import handlesReducer from './handlesReducer'
import handlesCallStateReducer from './handlesCallStateReducer'
import errorReducer from './errorReducer'
import {intlReducer} from 'react-intl-redux'

export default combineReducers({
    handles: handlesReducer,
    handlesCallState: handlesCallStateReducer,
    error: errorReducer,
    intl: intlReducer
})