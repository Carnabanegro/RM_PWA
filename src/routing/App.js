import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import {RouterCustom} from "./RouterCustom";
import '../style/style.scss';
import {Sidebar,Footer,Header} from '../components/common/index'
import {UserContext} from "../context/userContext";
import Login from "../views/Login";



function App() {
    const { username, password } = useContext(UserContext);
  return (
      <div className="app dark">
          {(username && password) ? (
              <BrowserRouter>
                  <Header/>
                  <div className="dashboard-container">
                      <Sidebar/>
                      <RouterCustom/>
                  </div>
                  <Footer/>
              </BrowserRouter>
          ):(
              <Login/>
          )}

      </div>

  );
}

export default App;
