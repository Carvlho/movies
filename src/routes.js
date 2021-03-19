import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Description from './pages/Description';
import Movies from './components/Movies/Movies';
import Header from './components/Header/Header';
import Home from './pages/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Home />
            <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/filme/:nomefilme" component={Description} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;