import React from "react";
import NavigationAppBar from "./NavigationAppBar";
import MainPage from "./main-page/MainPage";
import DirectorsPage from "./directors-page/DirectorsPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DirectorPage from "./director-page/DirectorPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavigationAppBar/>
                <Switch>
                    <Route path={"/directors/:directorId"}>
                        <DirectorPage/>
                    </Route>
                    <Route path={"/directors"}>
                        <DirectorsPage/>
                    </Route>
                    <Route path={"/"}>
                        <MainPage/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
