import {call, put, all} from 'redux-saga/effects';
import {anErrorOccurred, clearError} from "../actions";
import EpisodesService from "../services/episodes";
import {receivedEpisodes} from "../actions/episodes";
import CharacterService from "../services/characters";


export function* fetchEpisodes({query}) {
    yield put(clearError());
    try {
        const result = yield call (EpisodesService.fetch,query);

        let position = []
        let promises = yield all(result.results.map( (episode, index) =>{
            let ids = []
            if (episode.characters.length !== 0){
                episode.characters.forEach(char =>{
                    ids.push(char.substring(char.lastIndexOf('/') + 1));
                })
                position.push(index);
                return call(CharacterService.fetch, ids)
            }
            return []
        }));
        let promisesFilter = promises.filter((item) => item.length !== 0)
        promisesFilter.forEach((res,index) =>{
            if ( res.length!== undefined ) {
                result.results[position[index]].characters = res;
            }else{
                result.results[position[index]].characters = [res];
            }

        })

        yield put(receivedEpisodes(result))

    } catch (err) {
        yield put(anErrorOccurred({anErrorOccurred: true, errorMsg: err}));
    }
}