import {
    CLEAR_CURRENT_SEARCH_LOC,
    LOCATIONS_FETCH_REQUESTED,
    LOCATIONS_FETCH_SUCCEEDED
} from "../actions/locations";

export default function locations(state = {
    result: null,
    currentSearch: null,
    loading: false
}, action) {
    switch (action.type) {
        case LOCATIONS_FETCH_REQUESTED :
            return {
                ...state, loading: true, currentSearch: action.query
            };
        case LOCATIONS_FETCH_SUCCEEDED :
            return {
                ...state, loading: false, result: action.result
            };
        case CLEAR_CURRENT_SEARCH_LOC :
            return {
                ...state , currentSearch: ''
            }
        default:
            return state;
    }
}

