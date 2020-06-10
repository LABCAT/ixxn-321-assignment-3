import React, { useContext, useState, useCallback } from 'react';


import { Context } from '../context/Context.js';
import NZMap from '../components/NZMap.js';
import SearchForm from '../components/SearchForm.js';

export default function Home() {
    const { currentRegion } = useContext(Context);
    const { Region, Active, Recovered, Deceased, Total } = currentRegion;
    const [showMapSection, setShowMapSection] = useState(false);
    const handleClick = () => setShowMapSection(!showMapSection)

    return (
        <section className="home-page">
            <label className="switch">
                <input 
                    type="checkbox" 
                    onClick={handleClick} 
                />
                <span className="slider"></span>
            </label>
            {
                showMapSection ?
                <div className="home-page-map-section">
                    <NZMap />
                    <dl>
                        <dt>Current region selected</dt>
                        <dd>{Region}</dd>
                        <dt>Active Cases</dt>
                        <dd>{Active}</dd>
                        <dt>Recovered Cases</dt>
                        <dd>{Recovered}</dd>
                        <dt>Deceased</dt>
                        <dd>{Deceased}</dd>
                        <dt>Total Cases</dt>
                        <dd>{Total}</dd>
                    </dl>
                </div> :
                <div className="home-page-search-section">
                    <SearchForm />
                </div>
            }
        </section>
    );
}