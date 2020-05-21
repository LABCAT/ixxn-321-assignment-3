import React, { useContext } from 'react'

import { Context } from '../context/Context.js';

export default function Home() {
    const { alertLevel } = useContext(Context);
    return (
        <h1>
            Current Alert Level is { alertLevel }
        </h1>
    );
}