import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../page-types/Home';
import Page from '../page-types/Page';
import SearchResultsPage from '../page-types/SearchResultsPage';

export default function Main() {
    return (
        <main className='main'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={SearchResultsPage} />
                <Route  path="/page/:id" component={Page} />
            </Switch>
        </main>
    );
}