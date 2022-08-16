import Http from "./http";

export default class EpisodesService{
    static fetch(query){
        return Http.fetch(`episode/${query}`)
    }
}