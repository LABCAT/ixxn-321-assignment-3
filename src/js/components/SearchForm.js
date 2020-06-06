import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Context } from '../context/Context.js';
import * as Constants from '../context/Constants.js';

export default function SearchForm(props) {
    let history = useHistory();
    const { currentSearchQuery, setSearchQuery } = useContext(Context);
    const [keyword, setKeyword] = useState(currentSearchQuery.keyword);
    const [category, setCategory] = useState(currentSearchQuery.category);

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

    useEffect(
        () => {
            if (!keyword || !category) {
                const urlKeyword = extractFromURI('keyword');
                const urlCategory = extractFromURI('category');
                const isRealCategory = Constants.categories.find(element => element.value === urlCategory);
                let updateKeyword = false;
                let updateCategory = false;

                if (!keyword && urlKeyword !== keyword) {
                    setKeyword(urlKeyword);
                    updateKeyword = true;
                }

                if (!category && urlCategory !== category && isRealCategory) {
                    setCategory(urlCategory);
                    updateCategory = true;
                }

                if (updateKeyword || updateCategory) {
                    setSearchQuery(
                        {
                            "keyword": updateKeyword ? urlKeyword : keyword,
                            "category": updateCategory ? urlCategory : category
                        }
                    );
                }
            }
        },
        [keyword, category, setSearchQuery]
    );

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="keyword">I WANT TO LEARN ABOUT</label>
            <input type="text" name="keyword" onChange={event => setKeyword(event.target.value)} value={keyword} placeholder="Your keyword/s"/>
            <label htmlFor="categories">IN</label>
            <select onChange={event => setCategory(event.target.value)} value={category}>
                {
                    Constants.categories.map(
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