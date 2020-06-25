import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import mainLogo from "../../images/mainDashboardLogo.png";

import { Context } from '../context/Context.js';
import * as Constants from '../context/Constants.js';

export default function Footer() {
    let history = useHistory();
    const { currentSearchQuery, setSearchQuery } = useContext(Context);

    const handleCategoryClick = (category) => {

        setSearchQuery(
            {
                "keyword": currentSearchQuery.keyword,
                "category": category ? category : 'All'
            }
        );
        const searchRoute = '/search/keyword=' + encodeURI(currentSearchQuery.keyword) + '/category=' + encodeURI(category ? category : 'All');
        history.push(searchRoute);
    }

    return (
        <footer className='site-footer'>
            <div className="footer-container">

                <div className="footer-col"> 
                    <h4>Learn About</h4>
                    {
                        Constants.categories.filter(
                            function (category) {
                                if (category.value === "All") {
                                    return false;
                                }
                                return true;
                            }
                        ).map(
                            category => (
                                <div className="footer-content" key={category.title}>
                                    <button onClick={() => handleCategoryClick(category.title)}>
                                        {category.title}
                                    </button>
                                </div>
                            )
                        )
                    }
                </div>
            
                <div className="footer-col">
                    <Link to="/" className='site-header-logo'>
                        <img
                            src={mainLogo}
                            className="logo-image"
                            alt="covid19 logo"
                        />
                    </Link>
                </div> 

            </div>

            <div className="footer-nav">
                <hr/>
                <a href="/info#about-us"><li>About us</li></a>
                <a href="/info#privacy"><li>Privacy</li></a>
                <a href="/info#terms-of-use"><li>Terms of use</li></a>
                <a href="/info#contact"><li>Contact</li></a>
            </div>
        </footer>
    );
}





