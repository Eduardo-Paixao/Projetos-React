import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncidente from './pages/newincidente';
import Contador from './pages/cont-hook';

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={Logon}/>
                <Route path ="/register" component={Register}/>
                <Route path ="/profile" component={Profile}/>
                <Route path ="/newincidente" component={NewIncidente}/>
                <Route path = "/contador" component ={Contador}/>
            </Switch>
        </BrowserRouter>
    );
}