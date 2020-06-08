import React, {Fragment, useContext } from 'react'

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
    
    return (
        <section className="search-results-page">
            <SearchForm/>
            { 
                searchHeading &&
                <h1>{searchHeading}</h1>
            }
            <div className={['search-results-page-' + (filteredSearchData.length ? 'results-grid' : 'no-results')]}>
                {
                    filteredSearchData.length ?
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
                        ) :
                    <p>Sorry, we couldn't find any information matching your query. Please try again.</p>
                }
            </div>
        </section>
    );
}
