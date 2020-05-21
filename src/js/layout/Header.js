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
                <Link to="/page-1">Page 1</Link>
                <Link to="/page-2">Page 2</Link>
                <Link to="/page-3">Page 3</Link>
            </nav>
        </header>
    );
}