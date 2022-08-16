import React, {useContext, useState} from 'react';
import {UserContext} from "../context/userContext";
//import {loginRequested} from "../actions/login";
import {connect} from "react-redux";
import logo from  '../img/rick-morty-logo.png';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const { dispatch } = useContext(UserContext);

    const callHandler = (value) =>{
        //login(username,password)
        dispatch({type: value, result: {username, password}})
    }
    const setPass = (event) =>{
       setPassword(event.target.value);
    }
    const setUser = (event) =>{
       setUsername(event.target.value)
    }

    return (
        <div className="login">
                <form  className="container-login" onSubmit={()=> callHandler("LOGIN")}>
                    <div><img width={163} height={80} src={logo} alt="CryptoMate"/></div>
                    <div className="container-input">
                        <input className="input-text" type="text" id="logUser" maxLength={16} required onChange={e => setUser(e)}/>
                        <span className="floating-label">Usuario</span>
                    </div>
                    <div  className="container-input">
                        <input className="input-text" type="password" id="logPass" maxLength={16} required onChange={e => setPass(e)}/>
                        <span className="floating-label">Contraseña</span>
                    </div>


                    <button className="button-gradient" type ="submit">Ingresar</button>
                    <div className="forget-pass">Olvidé mi contraseña</div>
                </form>
        </div>
    );
}

export default connect(
    state => ({}),
    dispatch =>({})
)(Login);