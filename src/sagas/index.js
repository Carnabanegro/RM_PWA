import {takeEvery, all} from 'redux-saga/effects';
import {CHARACTERS_FETCH_REQUESTED, CHARACTERS_FOR_ID_FETCH_REQUESTED} from "../actions/characters";
import {EPISODES_FETCH_REQUESTED} from "../actions/episodes";
import {LOCATIONS_FETCH_REQUESTED} from "../actions/locations";
import {fetchCharacters} from "./characters";
import {fetchEpisodes} from "./episodes";
import {fetchLocations} from "./locations";

export default function* root() {
    yield all([
        // CHARACTERS
        takeEvery(CHARACTERS_FETCH_REQUESTED, fetchCharacters),

        // EPISODES
        takeEvery(EPISODES_FETCH_REQUESTED, fetchEpisodes),

        // LOCATIONS
        takeEvery(LOCATIONS_FETCH_REQUESTED, fetchLocations)

    ]);
}
