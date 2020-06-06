import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className='site-header'>
            <Link to="/" className='site-header-logo'>
                Logo goes here
            </Link>
            <nav className="site-header-nav">
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
}