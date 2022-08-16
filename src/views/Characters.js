import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {charactersRequestedFetch} from "../actions/characters";
import * as PropTypes from "prop-types";
import CardChar from "../components/common/CardChar";
import Pagination from "../components/common/Pagination";
import {getPage} from "../util/Strings";
import Searcher from "../components/common/Searcher";


function Characters({requestCharacters,characters,prev,next,current,pages,currentSearch}) {
    const [query, setQuery] = useState("")

    useEffect(()=>{
        requestCharacters(query)
    },[query,requestCharacters])
    return (
        !characters.result ? (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
            <div className="d-flex flex-column">
                <Searcher option="CHARACTERS"/>
                <div className="characters-list">
                    {characters.result.results.map(character =>
                        <CardChar
                            name={character.name}
                            status={character.status}
                            type={character.type}
                            gender={character.gender}
                            origin={character.origin.name}
                            location={character.location.name}
                            image={character.image}
                            episodes={character.episode}
                        />
                    )}
                </div>
                <Pagination prev={prev} next={next} current={current} pages={pages} option="CHARACTERS" search={currentSearch}/>
            </div>

        )
    );
}

Characters.propTypes = {
    characters: PropTypes.object
};
export default connect(
    state => ({
        characters: state.characters,
        current: state.characters.result.info.next?  (parseInt(getPage(state.characters.result.info.next))-1).toString() : (parseInt(getPage(state.characters.result.info.prev))+1).toString(),
        prev: state.characters.result.info.prev? getPage(state.characters.result.info.prev) : null,
        next: state.characters.result.info.next? getPage(state.characters.result.info.next) : null,
        pages: state.characters.result.info.pages,
        currentSearch: state.characters.currentSearch
    }),
    dispatch => ({
        requestCharacters: (query) => dispatch(charactersRequestedFetch(query))
    })
)(Characters);

