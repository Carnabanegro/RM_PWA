import {Link, useLocation} from "react-router-dom";
//import {useContext} from "react";
//import {DarkModeContext} from "../../context/DarkModeContext";


function Sidebar() {
    const {pathname} = useLocation();
    /*const { dispatch } = useContext(DarkModeContext);

    const callHandler = (value) =>{
        dispatch({ type: value })
    }*/
    return(
            <div className="sidebar">
                <div className="sidebar-content">
                    <ul>
                        <Link to="/home" style={{ textDecoration: "none" }}>
                            <li className={(pathname === '/home') ? 'active-option' : ''}>
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link activeStyle to="/characters" style={{ textDecoration: "none" }} >
                            <li className={(pathname === '/characters') ? 'active-option' : ''}>
                                <span>Characters</span>
                            </li>
                        </Link>
                        <Link to="/locations" style={{ textDecoration: "none" }}>
                            <li className={(pathname === '/locations') ? 'active-option ' : ''}>
                                <span>Locations</span>
                            </li>
                        </Link>
                        <Link to="/episodes" style={{ textDecoration: "none" }}>
                            <li className={(pathname === '/episodes') ? 'active-option ' : ''}>
                                <span>Episodes</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                {/*<div className="bottom">
                    <div
                        className="colorOption"
                        onClick={() => callHandler("LIGHT")}
                    ></div>
                    <div
                        className="colorOption"
                        onClick={() => callHandler("DARK")}
                    ></div>
                </div>*/}
            </div>

    );
}

export default Sidebar;