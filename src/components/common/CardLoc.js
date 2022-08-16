import {OverlayTrigger, Popover} from "react-bootstrap";
import InfoModal from "./InfoModal";
import {connect} from "react-redux";
import {charactersRequestedFetch} from "../../actions/characters";
import {useState} from "react";

function CardLoc({name,type,dimension,residents}) {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {
        setShow(true)
    };

    return (
        <div className="location-card">
            <div className="elem-card"><u>Name</u>: {name ? name : "unknown"}</div>
            <div className="elem-card"><u>Type</u>: {type ? type : "unknown"}</div>
            <div className="elem-card"><u>Dimension</u>: {dimension ? dimension : "unknown"}</div>

            <div onClick={handleShow}><i style={{fontSize: "50px"}} className="bi-person-square"/></div>

            <InfoModal title="Residents" elements={residents}  handleClose={handleClose} show={show} type="CHARACTERS"/>
        </div>
    );
};

export default CardLoc;