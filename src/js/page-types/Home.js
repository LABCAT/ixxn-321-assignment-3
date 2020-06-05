import React, { useContext } from 'react'
import mainLogo from "../../images/mainDashboardLogo.png";
import mobileLogo from "../../images/mobileLogo.png";

import { Context } from '../context/Context.js';

export default function Home() {
    const { alertLevel } = useContext(Context);
    return (

        <img>
        src={mainLogo}
        className="logo-image"
        alt="covid19 logo"
        </img>

         <h1>
            HOME PAGE: Current Alert Level is { alertLevel }
        </h1>

        
    );
}