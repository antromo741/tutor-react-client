import {
    SUCCESSFULLY_LOADED_GROUP_SESSIONS,
    START_LOADING_GROUP,
} from '../actions'

const initialState = {
    groupsLoaded: {},
    list: [],
}

export default function sessionReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_GROUP:
            return {
                ...state,
                groupsLoaded: { ...state.groupsLoaded, [action.payload]: 'inProgress' },
            }
        case SUCCESSFULLY_LOADED_GROUP_SESSIONS:
            return {
                groupsLoaded: {
                    ...state.groupsLoaded,
                    [action.payload.group.id]: 'successful',
                },
                list: state.list.concat(action.payload.sessions),
            }
        default:
            return state
    }
}