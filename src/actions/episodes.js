export const EPISODES_FETCH_REQUESTED = 'EPISODES_FETCH_REQUESTED';
export function episodesRequestedFetch(query) {
    return {
        type: EPISODES_FETCH_REQUESTED,query
    };
}

export const EPISODES_FETCH_SUCCEEDED= 'EPISODES_FETCH_SUCCEEDED';
export function receivedEpisodes(result) {
    return {
        type: EPISODES_FETCH_SUCCEEDED,result
    };
}

export const CLEAR_CURRENT_SEARCH_EPI = 'CLEAR_CURRENT_SEARCH_EPI';
export function clearEpiSearch(){
    return {
        type: CLEAR_CURRENT_SEARCH_EPI
    };
}