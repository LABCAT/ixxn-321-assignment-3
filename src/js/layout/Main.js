import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../page-types/Home';
import Page from '../page-types/Page';
import SearchResultsPage from '../page-types/SearchResultsPage';
import StyleGuide from '../page-types/StyleGuide';

import Info from '../page-types/Info';


export default function Main() {
    return (
        <main className='main'>
            <Switch>
                <ScrollToTop path="*">
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={SearchResultsPage} />
                    <Route path="/page/:id" component={Page} />
                    <Route exact path="/style-guide" component={StyleGuide} />
                    <Route path="/info" component={Info} />
                </ScrollToTop>
            </Switch>
        </main>
        
    );
}

/* these two functions should really be moved to their own files, even though this is the only component they are used in. */

export const ScrollToTop = ({ children, location }) => {
    //ensures that the scroll position will always begin at the top when a route changes 
    React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
    return children;
}