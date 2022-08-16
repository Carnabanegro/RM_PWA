import React,{useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {episodesRequestedFetch} from "../actions/episodes";
import CardEpi from "../components/common/CardEpi";
import Pagination from "../components/common/Pagination";
import {getPage} from "../util/Strings";
import Searcher from "../components/common/Searcher";

function Episodes({requestEpisodes,episodes,prev,next,current,pages,currentSearch}) {

    const [query, setQuery] = useState("")


    useEffect(()=>{
        requestEpisodes(query)
    },[query,requestEpisodes])

    return (
        !episodes.result ? (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
            <div className="d-flex flex-column">
                <Searcher option="EPISODES"/>
                <div className="episodes-list">
                    {episodes.result.results.map(episode =>
                        <CardEpi
                            name={episode.name}
                            airDate={episode.air_date}
                            number={episode.episode}
                            characters={episode.characters}

                        />
                    )}
                </div>
                <Pagination prev={prev} next={next} current={current} pages={pages} option="EPISODES" search={currentSearch}/>
            </div>

        )
    );
}

Episodes.propTypes = {
    episodes: PropTypes.object
};

export default connect(
    state => ({
        episodes: state.episodes,
        current: state.episodes.result.info.next?  (parseInt(getPage(state.episodes.result.info.next))-1).toString() : (parseInt(getPage(state.episodes.result.info.prev))+1).toString(),
        prev: state.episodes.result.info.prev? getPage(state.episodes.result.info.prev) : null,
        next: state.episodes.result.info.next? getPage(state.episodes.result.info.next) : null,
        pages: state.episodes.result.info.pages,
        currentSearch: state.episodes.currentSearch
    }),
    dispatch => ({
        requestEpisodes: (query) => dispatch(episodesRequestedFetch(query))
    })
)(Episodes);