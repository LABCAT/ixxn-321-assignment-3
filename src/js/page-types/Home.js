import React, { Fragment, useContext } from 'react'

import { Context } from '../context/Context.js';
import NZMap from '../components/NZMap.js';
import SearchForm from '../components/SearchForm.js';

export default function Home() {
    const { currentRegion } = useContext(Context);
    const { Region, Active, Recovered, Deceased, Total } = currentRegion;

    return (
        <Fragment>
            <SearchForm/>
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
            <NZMap/>
        </Fragment>
    );
}