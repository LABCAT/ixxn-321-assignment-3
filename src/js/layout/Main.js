import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../page-types/Home';
import Page from '../page-types/Page';

export default function Main() {
    return (
        <main className='main'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/page-1" component={Page} />
                <Route path="/page-2" component={Page} />
                <Route path="/page-3" component={Page} />
            </Switch>
        </main>
    );
}