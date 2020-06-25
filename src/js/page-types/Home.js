import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Transition } from 'react-spring/renderprops';


import NZMap from '../components/NZMap.js';
import Graph from '../components/Graph';
import GraphMobile from '../components/GraphMobile';
import SearchForm from '../components/SearchForm.js';

import { Context } from '../context/Context.js';
import * as Constants from '../context/Constants.js';

export default function Home() {
    let history = useHistory();
    const { currentSearchQuery, setSearchQuery } = useContext(Context);
    const [showMapSection, setShowMapSection] = useState(false);

    const handleClick = () => setShowMapSection(!showMapSection);

    const handleCategoryClick = (category) => {

        setSearchQuery(
            {
                "keyword": currentSearchQuery.keyword,
                "category": category ? category : 'All'
            }
        );
        const searchRoute = '/search/keyword=' + encodeURI(currentSearchQuery.keyword) + '/category=' + encodeURI(category ? category : 'All');
        history.push(searchRoute);
    };

    return (
        <section className="home-page">
            <label className="home-page-switch">
                <input
                    type="checkbox"
                    onClick={handleClick}
                />
                <span className="home-page-slider round"></span>
            </label>
            <div className="home-page-transition-holder" id="transition-holder">
                <Transition
                    items={showMapSection}
                    from={{ opacity: 1, transform: 'translateX(2000px)', position: 'absolute' }}
                    enter={{ opacity: 1, transform: 'translateX(0px)', position: 'relative' }}
                    leave={{ opacity: 1, transform: 'translateX(-2000px)', position: 'absolute' }}
                >
                    {showMapSection =>
                        showMapSection
                            ? props =>
                                <div className="home-page-map-section" id="map-section" style={props}>
                                    <div className="home-page-map-section-column">
                                        <div className="mobile-graph">
                                            <GraphMobile />
                                            <NZMap />
                                        </div>
                                        <div className="big-graph">
                                            <NZMap />
                                            <Graph />
                                        </div>
                                    </div>
                                </div>
                            : props =>
                                <div className="home-page-search-section" id="search-section" style={props}>
                                    <SearchForm />
                                    <div className="home-page-search-section-quick-links">
                                        {
                                            Constants.categories.filter(
                                                function (category) {
                                                    if (category.value === "All") {
                                                        return false;
                                                    }
                                                    return true;
                                                }
                                            ).map(
                                                category => (
                                                    <button onClick={() => handleCategoryClick(category.title)} key={category.title}>
                                                        <div className="image-holder">
                                                            <img
                                                                src={require(`../../images/${category.title}.png`)}
                                                                alt={category.title}
                                                            />
                                                        </div>
                                                        <h2>{category.title}</h2>
                                                    </button>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                    }
                </Transition>
            </div>
        </section>
    );
}