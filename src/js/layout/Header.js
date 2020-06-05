import React from 'react';
import { Link } from "react-router-dom";
import mainLogo from "../../images/mainDashboardLogo.png";


export default function Header() {
    return (
        <header className='site-header'>
           
            <Link to="/" className='site-header-logo'>
             <img
                src={mainLogo}
                className="logo-image"
                alt="covid19 logo"
             />
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