import {combineReducers} from 'redux';
import characters from "./characters";
import locations from "./locations";
import episodes from "./episodes";



export  default combineReducers({
    characters,
    locations,
    episodes
})

