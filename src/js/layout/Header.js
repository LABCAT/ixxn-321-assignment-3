import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import mainLogo from "../../images/mainDashboardLogo.png";
// import mobileLogo from "../../image/mobileLogo.png";

import { Context } from '../context/Context.js';

export default function Header() {
    const { alertLevel } = useContext(Context);
    return (
        <header className='site-header'>
           
            <Link to="/" className='site-header-logo'>
            <img
                src={mainLogo}
                className="logo-image"
                alt="covid19 logo"
             />
            </Link>
            <Link to= "/">
            <span className='site-header-alert-level'>Alert Level {alertLevel}</span>
            </Link>
        </header>
    );
}