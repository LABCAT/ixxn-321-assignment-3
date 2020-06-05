import React, {Fragment, useContext} from 'react'

import SearchForm from '../components/SearchForm.js';

import { Context } from '../context/Context.js';

export default function SearchResultsPage() {
    const { currentSearchQuery } = useContext(Context);
    const { keyword, category } = currentSearchQuery;

    let searchHeading = '';
    if(keyword || category) {
        searchHeading = 
        <Fragment>
            Search results
            {
                keyword &&
                <Fragment> matching <span className="search-results-page-query-value">{keyword}</span></Fragment>
            }
            {
                category ?
                    <Fragment> in the <span className="search-results-page-query-value">{category}</span> category</Fragment> :
                    <Fragment> in <span className="search-results-page-query-value">All Categories</span></Fragment>
            }
        </Fragment>
    }
    

    return (
        <section className="search-results-page">
            <SearchForm/>
            { 
                searchHeading &&
                <h1>{searchHeading}</h1>
            }
        </section>
    );
}