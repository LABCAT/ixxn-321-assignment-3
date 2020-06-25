import React, {Fragment, useContext } from 'react'
import { Transition } from 'react-spring/renderprops';

import searchData from "../../data/search-data.json";
import SearchForm from '../components/SearchForm.js';
import SearchResult from '../components/SearchResult.js';


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
                category && category !== 'All' ?
                    <Fragment> in the <span className="search-results-page-query-value">{category}</span> category</Fragment> :
                    <Fragment> in <span className="search-results-page-query-value">All Categories</span></Fragment>
            }
        </Fragment>
    }

    const filteredSearchData = searchData.filter(
        function (page) {
            const keywordFound = page.Title.toLowerCase().includes(keyword);
            if (keywordFound){
                if (category === 'All') {
                    return page;
                }
                else if (category === page.Category) {
                    return page;
                }
            }
            return null;
        }
    );
    
    const hasResults = filteredSearchData.length ? true : false;

    console.log(hasResults);
    

    return (
        <section className="search-results-page">
            <SearchForm/>
            { 
                searchHeading &&
                <h1>{searchHeading}</h1>
            }
            <Transition
                items={hasResults}
                from={{ opacity: 0, transform: 'translateY(2000px)'}}
                enter={{ opacity: 1, transform: 'translateY(0px)' }}
                leave={{ opacity: 0, transform: 'translateX(0px)'}}
            >
                {hasResults =>
                    hasResults
                        ? props =>
                            <div className="search-results-page-results-grid" style={props}>
                                {
                                    filteredSearchData.map(
                                        page => (
                                            <SearchResult
                                                key={page.ID}
                                                id={page.ID}
                                                title={page.Title}
                                                summary={page.Summary}
                                                category={page.Category}
                                            />
                                        )
                                    )
                                }
                            </div>
                        : props =>
                            <div className="search-results-page-no-results" style={props}>
                                <p>Sorry, we couldn't find any information matching your query. Please try again.</p>
                            </div>
                }
            </Transition>
        </section>
    );
}
