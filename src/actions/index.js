/*export const SESSION_RECEIVED = 'SESSION_RECEIVED';
export function receiveSession(profile, token, menuRoutesAll, routeAll) {
    return {
        type: SESSION_RECEIVED, profile, token, menuRoutesAll, routeAll
    };
}*/

export const AN_ERROR_OCCURRED = 'AN_ERROR_OCCURRED';
export const anErrorOccurred = error => ({type: AN_ERROR_OCCURRED, error});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({type: CLEAR_ERROR});
