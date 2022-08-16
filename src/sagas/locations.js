import {call, put, all} from 'redux-saga/effects';
import {anErrorOccurred, clearError} from "../actions";
import {receivedLocations} from "../actions/locations";
import LocationsService from "../services/locations";
import CharacterService from "../services/characters";


export function* fetchLocations({query}) {
    yield put(clearError());
    try {
        const result = yield call (LocationsService.fetch,query);
        let position = []
        ////AHORA BUSCAMOS LOS RESIDENTES PARA CADA LOCACION////
        let promises = yield all(result.results.map( (location, index) =>{
            let ids = []
            if (location.residents.length !== 0){
                location.residents.forEach(resident =>{
                    ids.push(resident.substring(resident.lastIndexOf('/') + 1));
                })
                position.push(index);
                return call(CharacterService.fetch, ids)
            }
            return []
        }));
        let promisesFilter = promises.filter((item) => item.length !== 0)
        promisesFilter.forEach((res,index) =>{
            if ( res.length!== undefined ) {
                result.results[position[index]].residents = res;
            }else{
                result.results[position[index]].residents = [res];
            }
        })
        ///////////////////////////////////////////////////////
        yield put(receivedLocations(result))

    } catch (err) {
        console.log(err)
        yield put(anErrorOccurred({anErrorOccurred: true, errorMsg: err}));
    }
}


