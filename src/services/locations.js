import Http from "./http";

export default class LocationsService{
    static fetch(query){
        return Http.fetch(`location/${query}`)
    }
}