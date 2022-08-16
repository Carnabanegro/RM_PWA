import * as React from "react";
import {Routes , Route, Navigate} from "react-router-dom";
import {Characters,Episodes,Locations,Home} from '../views/index'
import {InnerContent} from '../components/index'

function RouterCustom(){
            return (
                <div className="container-router">
                    <Routes>
                        <Route path="/"  element={<InnerContent/>}>
                            <Route path="/" element={<Navigate replace to ="home"/>}/>
                            <Route path="home" element={<Home/>}/>
                            <Route path="characters" element={<Characters/>}/>
                            <Route path="episodes"  element={<Episodes/>}/>
                            <Route path="locations" element={<Locations/>}/>
                        </Route>
                    </Routes>
                </div>
            )
}

export {RouterCustom}