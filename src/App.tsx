import * as React from 'react';
import classes from "./app.module.css";
import Header from "./components/layout/header/Header";
import {Switch, Route} from 'react-router-dom'
import Main from "./components/main/Main";
import Info from "./components/info/Info";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import ConverterContainer from "./components/conventer/ConverterContainer";
import {useEffect} from "react";
import {getAllCurrency} from "./redux/reducers/valuteReducer";


const App = () => {

    return (
        <Provider store={store}>
        <div>
            <Header/>
            <Switch>
                <div className={classes.containerSwitch}>
                    <Route path={'/main'}><Main/></Route>
                    <Route path={'/conv'}><ConverterContainer/></Route>
                    <Route path={'/info'}><Info/></Route>
                </div>
            </Switch>
        </div>
        </Provider>
    )
}

export default App;
