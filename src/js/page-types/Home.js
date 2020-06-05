import React, { Fragment, useContext } from 'react'

import { Context } from '../context/Context.js';
import NZMap from '../components/NZMap.js';

export default function Home() {
    const { alertLevel, currentRegion } = useContext(Context);
    return (
        <Fragment>
            <h1>
                HOME PAGE: Current Alert Level is {alertLevel}, Current region selected {currentRegion}
            </h1>
            <NZMap/>
        </Fragment>
    );
}