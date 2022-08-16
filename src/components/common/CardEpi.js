import {useState} from "react";
import InfoModal from "./InfoModal";
import {OverlayTrigger} from "react-bootstrap";

export default function CardEpi({name,airDate,number,characters}) {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {
        setShow(true)
    };

    return (
        <div className="episode-card">
            <div className="elem-card"><u>Name</u>: {name ? name : "unknown"}</div>
            <div className="elem-card"><u>Air Date</u>: {airDate ? airDate : "unknown"}</div>
            <div className="elem-card"><u>N° Ep</u>: {number ? name : "unknown"}</div>
            <div onClick={handleShow}><i style={{fontSize: "50px"}} className="bi-person-square"/></div>

            <InfoModal title="Residents" elements={characters}  handleClose={handleClose} show={show} type="CHARACTERS"/>
        </div>
    );
};