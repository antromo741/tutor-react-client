import { combineReducers } from 'redux'
import groupsReducer from './groups'
import sessionsReducer from './sessions'

export default combineReducers({
    groups: groupsReducer,
    sessions: sessionsReducer
});