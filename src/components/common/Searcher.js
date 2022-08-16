import {useState} from "react";
import {connect} from "react-redux";
import {charactersRequestedFetch, clearCharSearch} from "../../actions/characters";
import {clearEpiSearch, episodesRequestedFetch} from "../../actions/episodes";
import {clearLocSearch, locationsRequestedFetch} from "../../actions/locations";

function Searcher({option,requestChar,requestLoc,requestEpi,cleanChar,cleanLoc,cleanEpi}){
    const [search,setSearch] = useState('');

    const callHandler = (e) =>{
        e.preventDefault();
        let query = `?name=${search}`
        if (option === "CHARACTERS"){
            console.log(query)
            requestChar(query)
        }else{
            if (option === "LOCATIONS"){
                requestLoc(query)
            }else{
                if (option === "EPISODES"){
                    requestEpi(query)
                }
            }
        }
    }

    const callCleaner = () => {
        if (option === "CHARACTERS"){
            cleanChar()
        }else{
            if (option === "LOCATIONS"){
                cleanLoc()
            }else{
                if (option === "EPISODES"){
                    cleanEpi()
                }
            }
        }
    }

    return (
      <div className="align-self-center d-flex gap-3">
          <form className="d-flex gap-3" onSubmit={(e) => callHandler(e)}>
              <div className="container-input">
                  <input className="input-text" type="text" id="search" maxLength={16} required onChange={e => setSearch(e.target.value)}/>
                  <span className="floating-label">FILTRAR</span>
              </div>
              <button className="button-gradient" type ="submit">Buscar</button>
          </form>
          <button className="button-reset" onClick={() => callCleaner()}>Limpiar<i className="bi bi-trash p-2"/></button>
      </div>
    );

}

export default connect(
    state => ({}),
    dispatch => ({
        requestChar: (query) => dispatch(charactersRequestedFetch(query)),
        requestEpi: (query) => dispatch(episodesRequestedFetch(query)),
        requestLoc: (query) => dispatch(locationsRequestedFetch(query)),

        cleanChar: () => dispatch(clearCharSearch()),
        cleanEpi: () => dispatch(clearEpiSearch()),
        cleanLoc: () => dispatch(clearLocSearch())

    })
)(Searcher);