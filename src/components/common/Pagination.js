import { connect } from 'react-redux';
import {charactersRequestedFetch} from "../../actions/characters";
import {episodesRequestedFetch} from "../../actions/episodes";
import {locationsRequestedFetch} from "../../actions/locations";


function Pagination({pages,current,prev,next, option,requestPageChar,requestPageLoc,requestPageEpi,search}){

    const requestPage = (page) => {
        let query= new URLSearchParams(search)
        if (query.has("page")){
            query.set("page",page)
            query = `?${query.toString()}`
        }else{
            query = `?page=${page.toString()}&${search.substring(search.lastIndexOf('?') + 1)}`
        }
        if (option === "CHARACTERS"){
            requestPageChar(query)
        }else{
            if (option === "LOCATIONS"){
                requestPageLoc(query)
            }else{
                if (option === "EPISODES"){
                    requestPageEpi(query)
                }
            }
        }
    }

    return (
        <nav aria-label="Page navigation" className="d-flex justify-content-center align-content-center">
            <ul className="container-pagination">
                {prev && (
                    <li className="page-item">
                        <a className="page-link" onClick={ () => requestPage(prev)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                )}
                {prev && (prev !== "1") && (
                    <>
                        <li className="page-item"><a className="page-link" onClick={ () =>requestPage(1)}>1</a></li>
                        <li className="page-item"><a className="page-link">...</a></li>
                    </>
                )}
                {prev && (
                    <li className="page-item"><a className="page-link" onClick={ () =>requestPage(prev)}>{prev}</a></li>
                )}

                <li className="page-item"><a className="page-link" onClick={() => requestPage(current)}>{current}</a></li>
                {next && (
                    <li className="page-item"><a className="page-link" onClick={ () =>requestPage(next)}>{next}</a></li>
                )}

                {next && (next != pages) &&  (
                    <>
                        <li className="page-item"><a className="page-link">...</a></li>
                        <li className="page-item"><a className="page-link" onClick={ () => requestPage(pages)}>{pages}</a></li>
                    </>
                )}
                {next && (
                    <li className="page-item">
                        <a className="page-link" onClick={ () => requestPage(next)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );

}

export default connect(
    state => ({
    }),
    dispatch => ({
        requestPageChar: (page) => dispatch(charactersRequestedFetch(page)),
        requestPageEpi: (page) => dispatch(episodesRequestedFetch(page)),
        requestPageLoc: (page) => dispatch(locationsRequestedFetch(page))
    })
)(Pagination);