import React from 'react';
import { useSelector } from 'react-redux';

import "./Feed.css";

const News = () => {
    const posts = useSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <li className="article" key={post.id}>
            <h3 className="title">{post.title}</h3>
            <p className="text">{post.content}</p>
            <small className="date">{post.date}</small>
        </li>
    ))

    return (
        <ul id="news">
            {renderedPosts} 
        </ul>
    )
}

export default News;