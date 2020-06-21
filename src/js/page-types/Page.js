import React from 'react';
import { useParams } from "react-router-dom";

import searchData from "../../data/search-data.json";

export default function Page() {
    let { id } = useParams();
    const pageContent = searchData.find(page => page.ID === parseInt(id));
    const { Title, Content, Category, Summary } = pageContent;
    return (
        <article className="article-page">
            <h1 className="heading">{Title}</h1>   
            <div dangerouslySetInnerHTML={{ __html: Content }}>
            </div>

            <blockquote>
                <h6>More about {Category}</h6>
                <p>Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.</p>
                <cite>Albert Einstein</cite>
            </blockquote>

            <div dangerouslySetInnerHTML={{ __html: Summary}}>
            </div>
        </article>
        
    );
}