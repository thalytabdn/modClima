import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import { SideBar } from './components/SideBar';
import CreateField from './pages/CreateField';
import CreateFarm from './pages/CreateFarm';
import CreateMill from './pages/CreateMill'
import CreateHarvest from './pages/CreateHarvest';
import FilterField from './pages/FilterField ';


export default function Routes(){
    return (
       
        <BrowserRouter>
            <SideBar/>
            
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/fields' component={CreateField}/>
                <Route path='/mills' component={CreateMill}/>
                <Route path='/farms' component={CreateFarm}/>
                <Route path='/harvests' component={CreateHarvest}/>

                <Route path='/filter-fields' component={FilterField}/>
            </Switch>

        </BrowserRouter>
    );
}