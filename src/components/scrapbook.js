import React from 'react';
import Daniel from "./images/Daniel.jpg"
import './scrapbook.css';

export default props => {
    return (
        <div className="scrapbook-container">
            <img src={Daniel}/>
        </div>
    )
}