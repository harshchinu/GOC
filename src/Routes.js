import React from 'react';
import {HashRouter,BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome';
import Home from './Components/Home';


const Routes = () => (
<BrowserRouter >
    <Switch>
    <Route exact path={process.env.PUBLIC_URL +"/"} component={Welcome}/>
    <Route path={process.env.PUBLIC_URL +"/home"} component={Home}/>  
   </Switch>
</BrowserRouter>
);
export default Routes;