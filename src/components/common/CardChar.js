import {useState} from "react";
import InfoModal from "./InfoModal";

export default function CardChar({name,status,type,gender,origin,location,image,episodes}) {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {
        setShow(true)
    };
    return (
        <div className="character-card">
            <div className="elem-card"><img width={300} height={300} src={image} alt="char-image"/></div>
            <div className="elem-card"><u>Name</u>: {name ? name : "unknown"}</div>
            <div className="elem-card"><u>Status</u>: {status ? status : "unknown"}</div>
            <div className="elem-card"><u>Type</u>: {type ? type : "unknown"}</div>
            <div className="elem-card"><u>Gender</u>: {gender ? gender :" unknown"}</div>
            <div className="elem-card"><u>Origin</u>: {origin ? origin : "unknown"}</div>
            <div className="elem-card"><u>Actual Location</u>: {location ? location : "unknown"}</div>
            <div onClick={handleShow}><i style={{fontSize: "50px"}} className="bi bi-film"/></div>

            <InfoModal title="Episodes" elements={episodes} type="EPISODES" handleClose={handleClose} show={show} name={name}/>
        </div>
    );
};