import {
    START_LOADING_GROUPS,
    SUCCESSFULLY_LOADED_GROUPS,
    FAILED_LOADING_GROUPS,
    ADD_GROUP,
} from '../actions'

const initialState = {
    loadingState: 'notStarted',
    list: [],
}

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_GROUPS:
            return { ...state, loadingState: 'inProgress' }
        case SUCCESSFULLY_LOADED_GROUPS:
            return {
                list: action.payload,
                loadingState: 'successful',
            }
        default:
            return state
    }
}