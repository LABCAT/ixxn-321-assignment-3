import React from 'react';

import { Link } from "react-router-dom";

export default function SearchResult(props) {
    const { id, title, summary, category } = props;
    return (
        <article className="search-result">

 <img className="search-result-images" src={require(`../../images/${category}.png`)} 
 alt={category.title}
 /> 
       
        <div className="search-result-content">
            <h2>
                <Link to={`/page/${id}/`}>
                    {title}
                </Link>
            </h2>
            <h3>
                <strong>{category}</strong>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: summary }}>

            </div>
        </div>
        </article>
    );
}
