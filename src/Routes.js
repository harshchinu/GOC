import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Welcome from './Components/Welcome';
import Home from './Components/Home';


const Routes = () => (
<BrowserRouter >
    <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route path="/home" component={Home}/>  
   </Switch>
</BrowserRouter>
);
export default Routes;