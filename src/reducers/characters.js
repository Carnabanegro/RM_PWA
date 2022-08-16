import {
    CHARACTERS_FETCH_REQUESTED,
    CHARACTERS_FETCH_SUCCEEDED
} from "../actions/characters";

export default function characters(state = {
    loading: false,
    currentSearch: null,
    result : null
}, action) {
    switch (action.type) {
        case CHARACTERS_FETCH_REQUESTED :
            return {
                ...state, loading: true, currentSearch: action.query
            };
        case CHARACTERS_FETCH_SUCCEEDED :
            return {
                ...state, loading: false, result: action.result
            };
        default:
            return state;
    }
}
