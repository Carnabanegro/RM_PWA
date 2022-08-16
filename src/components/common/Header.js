import {UserContext} from "../../context/userContext";
import {useContext} from "react";
import logo from  '../../img/rick-morty-logo.png';

function getInitials (string) {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

function Header() {
    const { username } = useContext(UserContext);
    return(
        <div className="header">
            <div className="mate-logo">
                <img width={163} height={80} src={logo} alt="CryptoMate"/>
            </div>
            <div className="container-user">
                <div className="container-logo">{getInitials(username)}</div>
                <div className="user-data">{username}</div>
                <div style={{color:"#FFFFFF"}}><i className="bi bi-chevron-down"/></div>
            </div>

        </div>
    );

}

export default Header;