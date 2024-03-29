import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './Login'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Switch>
    </BrowserRouter>
)