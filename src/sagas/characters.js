import {call, put,all} from 'redux-saga/effects';
import {anErrorOccurred, clearError} from "../actions";
import CharacterService from "../services/characters";
import {receivedCharacters} from "../actions/characters";
import EpisodesService from "../services/episodes";


export function* fetchCharacters({query}) {
    yield put(clearError());
    try {
        const result = yield call (CharacterService.fetch,query);
        let position = []
        let promises = yield all(result.results.map( (character, index) =>{
            let ids = []
            if (character.episode.length !== 0){
                character.episode.forEach(epi =>{
                    ids.push(epi.substring(epi.lastIndexOf('/') + 1));
                })
                position.push(index);
                return call(EpisodesService.fetch, ids)
            }
            return []
        }));
        let promisesFilter = promises.filter((item) => item.length !== 0)
        promisesFilter.forEach((res,index) =>{
            if ( res.length!== undefined ) {
                result.results[position[index]].episode = res;
            }else{
                result.results[position[index]].episode = [res];
            }

        })

        yield put(receivedCharacters(result))
    } catch (err) {
        yield put(anErrorOccurred({anErrorOccurred: true, errorMsg: err}));
    }
}

