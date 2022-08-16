import {Button, Modal} from "react-bootstrap";
import {element} from "prop-types";


function renderSwitch(type,error,element,name) {
    if (!error){
        switch(type) {
            case 'CHARACTERS':
                return (
                    <div className="character-card modal-card">
                        <div className="pb-2"><img src={element.image}/></div>
                        <div className="text-center">{element.name}</div>
                    </div>
                )
            case "LOCATIONS":
                return (
                    <div className="location-card modal-card">
                        <div className="elem-card"><u>Name</u>: {element.name ? element.name : "unknown"}</div>
                        <div className="elem-card"><u>Type</u>: {element.type ? element.type : "unknown"}</div>
                        <div className="elem-card"><u>Dimension</u>: {element.dimension ? element.dimension : "unknown"}</div>
                    </div>
                )
            case "EPISODES":
                return (
                    <div className="episode-card modal-card">
                        <div className="elem-card"><u>Name</u>: {element.name ? element.name : "unknown"}</div>
                        <div className="elem-card"><u>Air Date</u>: {element.airDate ? element.airDate : "unknown"}</div>
                        <div className="elem-card"><u>N° Ep</u>: {element.episode ? element.episode : "unknown"}</div>
                    </div>
                )
            default:
                return (
                    <div  className="min-vh-100 row align-content-center justify-content-center">
                        ERROR!!
                    </div>

                );
        }
    }else{
        switch(type) {
            case 'CHARACTERS':
                return (
                    <div className="min-vh-100 row align-content-center justify-content-center">
                        CHARACTERS
                    </div>
                )
            case "LOCATIONS":
                return (
                    <div className="min-vh-100 row align-content-center justify-content-center">
                        NO HAY RESIDENTES
                    </div>
                )
            case "EPISODES":
                return (
                    <div className="min-vh-100 row align-content-center justify-content-center">
                        NO HAY EPISODIOS
                    </div>
                )
            default:
                return (
                    <div className="min-vh-100 row align-content-center justify-content-center">
                        ERROR!!
                    </div>

                );
        }
    }

}

export  default function InfoModal({show,handleClose, title, elements,type,name}){
    return(

        <Modal show={show} onHide={handleClose} animation={false} size="xl" backdropClassName="modal-data">
            <Modal.Header  closeButton closeVariant='white' className="modal-section p-4">
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-section">
                <div className="residents-list">

                    {elements.length ? (elements.map(element=>{
                        return renderSwitch(type, false, element,name)
                    }
                    )):(
                        renderSwitch(type,true,[],name)
                        )
                    }
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-section justify-content-center p-4">
                <Button variant="secondary" onClick={() =>handleClose()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};