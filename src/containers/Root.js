import React, {Component} from 'react';
import Store from '../store/index'
import {Provider} from 'react-redux';
import * as PropTypes from "prop-types";
import {PersistGate} from "redux-persist/integration/react";
import {UserProvider} from "../context/userContext";

let store = Store()

const Root = ({comp: Comp}) => {
    return (
        <Provider store={store.store}>
            <UserProvider>
                <PersistGate loading={null} persistor={store.persistor}>
                    <Comp/>
                </PersistGate>
            </UserProvider>
        </Provider>
    );
};

Root.propTypes = {
    comp: PropTypes.oneOfType([
        PropTypes.instanceOf(Component),
        PropTypes.func
    ]).isRequired
};

export default Root;


