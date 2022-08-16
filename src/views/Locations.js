import React,{useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {locationsRequestedFetch} from "../actions/locations";
import CardLoc from "../components/common/CardLoc";
import {getPage} from "../util/Strings";
import Pagination from "../components/common/Pagination";
import Searcher from "../components/common/Searcher";

function Locations({requestLocations,locations, prev, next, current, pages,currentSearch}) {

    //const [query, setQuery] = useState("")


    useEffect(()=>{
        requestLocations(currentSearch)
    },[currentSearch,requestLocations])

    return (
        !locations.result ? (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        ) : (
            <div className="d-flex flex-column">
                <Searcher option="LOCATIONS"/>
                <div className="locations-list">
                    {locations.result.results.map(location =>
                        <CardLoc
                            name={location.name}
                            type={location.type}
                            dimension={location.dimension}
                            residents={location.residents}
                        />
                    )}
                </div>
                <Pagination prev={prev} next={next} current={current} pages={pages} option="LOCATIONS" search={currentSearch}/>
            </div>

        )
    );
}

Locations.propTypes = {
    locations: PropTypes.object
};

export default connect(
    state => ({
        locations: state.locations,
        current: state.locations.result.info.next?  (parseInt(getPage(state.locations.result.info.next))-1).toString() : (parseInt(getPage(state.locations.result.info.prev))+1).toString(),
        prev: state.locations.result.info.prev? getPage(state.locations.result.info.prev) : null,
        next: state.locations.result.info.next? getPage(state.locations.result.info.next) : null,
        pages: state.locations.result.info.pages,
        currentSearch: state.locations.currentSearch
    }),
    dispatch => ({
        requestLocations: (query) => dispatch(locationsRequestedFetch(query))
    })
)(Locations);