export const LOCATIONS_FETCH_REQUESTED = 'LOCATIONS_FETCH_REQUESTED';
export function locationsRequestedFetch(query) {
    return {
        type: LOCATIONS_FETCH_REQUESTED,query
    };
}

export const LOCATIONS_FETCH_SUCCEEDED= 'LOCATIONS_FETCH_SUCCEEDED';
export function receivedLocations(result) {
    return {
        type: LOCATIONS_FETCH_SUCCEEDED,result
    };
}

export const CLEAR_CURRENT_SEARCH_LOC = 'CLEAR_CURRENT_SEARCH_LOC';
export function clearLocSearch(){
    return {
        type: CLEAR_CURRENT_SEARCH_LOC
    };
}

