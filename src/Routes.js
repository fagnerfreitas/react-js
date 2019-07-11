import React from 'react';
import { BrowserRouter,Switch, Router, Route,  } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}  />
            <Route  path="/login" component={Login}  />
        </Switch>
    </BrowserRouter>
)

export default Routes;