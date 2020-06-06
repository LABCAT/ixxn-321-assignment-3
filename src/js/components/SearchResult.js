import React from 'react';

import { Link } from "react-router-dom";

export default function SearchResult(props) {
    const { id, title, summary, category } = props;
    return (
        <article className="search-result">
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
        </article>
    );
}
