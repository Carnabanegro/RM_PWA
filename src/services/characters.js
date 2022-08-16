import Http from "./http";

export default class CharacterService{
    static fetch(query){
        return Http.fetch(`character/${query}`)
    }
}