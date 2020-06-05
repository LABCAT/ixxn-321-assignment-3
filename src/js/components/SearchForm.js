import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";

import { Context } from '../context/Context.js';

const categories = [
    {
        "value" : "All",
        "title" : "All Categories"
    },
    {
        "value": "Health",
        "title": "Health"
    },
    {
        "value": "Business",
        "title": "Business"
    }
];
    
const extractFromURI = (type) => {
    let string = '';
    let re = new RegExp(type + '=(.+)', 'g');
    let match = window.location.href.match(re);
    
    if (match) {
        string = match[0];
        const start = string.indexOf('=') + 1; 
        if (string.indexOf('/') > 0) {
            string = string.substring(start, string.indexOf('/'));
        }
        else {
            string = string.substring(start);
        }
        string = decodeURI(string);
    }
    return string;
};

export default function SearchForm() {
    let form = React.useRef();
    let history = useHistory();
    const { currentSearchQuery, setSearchQuery } = useContext(Context);
    const [keyword, setKeyword] = useState(currentSearchQuery.keyword);
    const [category, setCategory] = useState(currentSearchQuery.category);
    

    if (!keyword || !category) {
        if (!keyword) {
            const urlKeyword = extractFromURI('keyword');
            if (urlKeyword !== keyword) {
                setKeyword(urlKeyword);
            }
        }

        if (!category) {
            const urlCategory = extractFromURI('category');
            const isCategory = categories.find(element => element.value === urlCategory);

            if (urlCategory !== category && isCategory) {
                setCategory(urlCategory);
            }
        }
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(
            {
                "keyword": keyword,
                "category": category
            }
        );
        const searchRoute = '/search/keyword=' + encodeURI(keyword) + '/category=' + encodeURI(category); 
        history.push(searchRoute);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit} ref={form}>
            <label htmlFor="keyword">I WANT TO LEARN ABOUT</label>
            <input type="text" name="keyword" onChange={event => setKeyword(event.target.value)} value={keyword} placeholder="Your keyword/s"/>
            <label htmlFor="categories">IN</label>
            <select onChange={event => setCategory(event.target.value)} value={category}>
                {
                    categories.map(
                        category => (
                            <option key={category.value} value={category.value}>
                                {category.title}
                            </option>
                        )
                    )
                }
            </select>
            <button type="submit">FIND ANSWERS</button>
        </form>
    );
}