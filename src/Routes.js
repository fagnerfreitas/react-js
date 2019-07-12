import React,{Component} from 'react';
import { BrowserRouter,Switch, Router, Route, Redirect } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';

const isAuth = ()=> false; 

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route
    {...rest}
    render={ props =>

        isAuth() ? ( <Component {...props} /> ) : (<Redirect to={{pathname: "/", state : {from : props.location }}} />
        )
    }
    />
);


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}  />
            <PrivateRoute  path="/login" component={Login}  />
        </Switch>
    </BrowserRouter>
)

export default Routes;