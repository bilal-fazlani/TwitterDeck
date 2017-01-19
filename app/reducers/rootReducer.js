
import {combineReducers} from 'redux'
import handlesReducer from './handlesReducer'
import handlesCallStateReducer from './handlesCallStateReducer'
import {intlReducer} from 'react-intl-redux'

export default combineReducers({
    handles: handlesReducer,
    handlesCallState: handlesCallStateReducer,
    intl: intlReducer
})