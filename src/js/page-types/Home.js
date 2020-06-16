import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Transition } from 'react-spring/renderprops';


import NZMap from '../components/NZMap.js';
import Graph from '../components/Graph';
import GraphMobile from '../components/GraphMobile';
import SearchForm from '../components/SearchForm.js';

import * as Constants from '../context/Constants.js';

export default function Home() {
    const [showMapSection, setShowMapSection] = useState(false);
    const handleClick = () => setShowMapSection(!showMapSection);

    //code to change the graph once the page width is less than 1000px
    const mq = window.matchMedia('(max-width: 1000px)');
    function graphChange(mq) {
        if (mq.matches) {
            return (
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>

                        <GraphMobile/>

                        <NZMap/>

                </div>)
        } else {
            return (
                <div>
                    <NZMap />
                    <Graph />
                </div>)
        }
    }


    return (
        <section className="home-page">
            <label className="home-page-switch">
                <input
                    type="checkbox"
                    onClick={handleClick}
                />
                <span className="home-page-slider round"></span>
            </label>
            <Transition
                items={showMapSection}
                from={{ opacity: 0, transform: 'translateX(2000px)' }}
                enter={{ opacity: 1, transform: 'translateX(0px)' }}
                leave={{ opacity: 0, transform: 'translateX(-2000px)' }}>
                {showMapSection =>
                    showMapSection
                        ? props =>
                            <div className="home-page-map-section" style={props}>
                                <div className="home-page-map-section-column" style={{ width: "70%", marginLeft: 'auto', marginRight: 'auto' }}>
                                    {graphChange(mq)}
                                </div>
                            </div>
                        : props =>
                            <div className="home-page-search-section" style={props}>
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
                                                <Link to={`/search/category=${category.title}`}>
                                                    <div className="image-holder">
                                                        <img
                                                            src={require(`../../images/${category.title}.png`)}
                                                            alt={category.title}
                                                        />
                                                    </div>
                                                    <h2>{category.title}</h2>
                                                </Link>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                }
            </Transition>
        </section>
    );
}