import {CLEAR_CURRENT_SEARCH_EPI, EPISODES_FETCH_REQUESTED, EPISODES_FETCH_SUCCEEDED} from "../actions/episodes";

export default function episodes(state = {
    loading: false,
    currentSearch: null,
    result : null
}, action) {
    switch (action.type) {
        case EPISODES_FETCH_REQUESTED :
            return {
                ...state, loading: true, currentSearch: action.query
            };
        case EPISODES_FETCH_SUCCEEDED :
            return {
                ...state, loading: false, result: action.result
            };
        case CLEAR_CURRENT_SEARCH_EPI:
            return {
                ...state, currentSearch: ''
            }
        default:
            return state;
    }
}