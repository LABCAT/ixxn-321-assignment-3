import React from 'react';
import { useParams } from "react-router-dom";

import searchData from "../../data/search-data.json";

export default function Page() {
    let { id } = useParams();
    const pageContent = searchData.find(page => page.ID === parseInt(id));
    const { Title, Content, Category } = pageContent;
    return (
        <article>
            <h1>{Title}</h1>
            <h2>{Category}</h2>
            <div dangerouslySetInnerHTML={{ __html: Content }}>

            </div>
        </article>
        
    );
}