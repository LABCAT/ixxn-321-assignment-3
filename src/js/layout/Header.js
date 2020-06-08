import React, {useContext} from 'react';
import { Link } from "react-router-dom";


import { Context } from '../context/Context.js';

export default function Header() {
    const { alertLevel } = useContext(Context);
    return (
        <header className='site-header'>
            <Link to="/" className='site-header-logo'>
                Logo goes here
            </Link>
            <span className='site-header-alert-level'>Alert Level {alertLevel}</span>
        </header>
    );
}