export const CHARACTERS_FETCH_REQUESTED = 'CHARACTERS_FETCH_REQUESTED';
export function charactersRequestedFetch(query) {
    return {
        type: CHARACTERS_FETCH_REQUESTED, query
    };
}

export const CHARACTERS_FETCH_SUCCEEDED= 'CHARACTERS_FETCH_SUCCEEDED';
export function receivedCharacters(result) {
    return {
        type: CHARACTERS_FETCH_SUCCEEDED, result
    };
}

export const CLEAR_CURRENT_SEARCH_CHAR = 'CLEAR_CURRENT_SEARCH_CHAR';
export function clearCharSearch(){
    return {
        type: CLEAR_CURRENT_SEARCH_CHAR
    };
}
