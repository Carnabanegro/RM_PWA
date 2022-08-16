export default class Http {
    static async fetch(query){
        const response = await fetch(`https://rickandmortyapi.com/api/${query}`)
        try{
            return response.json()
        }catch (parseError){
            return {error:'Algo salio mal', response}
        }
    }
}