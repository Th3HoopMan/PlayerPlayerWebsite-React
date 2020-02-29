import React from 'react';
import './Detail.css';

const detail = ({header, children}) => {
    return(
    <div className="Detail">
        <h1>{header}</h1>
        <p>{children}</p>
    </div>
    );
}

export default detail;