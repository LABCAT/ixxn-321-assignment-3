import React, { useContext, useState, useCallback } from 'react';
import { Transition } from 'react-spring/renderprops'

import NZMap from '../components/NZMap.js';
import Graph from '../components/Graph';
import SearchForm from '../components/SearchForm.js';

export default function Home() {
    const [showMapSection, setShowMapSection] = useState(false);
    const handleClick = () => setShowMapSection(!showMapSection)

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
                                <div className="home-page-map-section-column" style={{width:"80%", marginLeft:'auto', marginRight:'auto'}}>
                                    <NZMap />
                                    <Graph />
                                </div>
                            </div>
                        : props => 
                        <div className="home-page-search-section" style={props}>
                            <SearchForm />
                        </div>
                }
            </Transition>
        </section>
    );
}