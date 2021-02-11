import React from 'react';

import './styles.css';

interface Props {
    url: string;
    title: string;
    text: string;
}

const Item: React.FC<Props> = ({url, title, text}) => {
    return (
        <div className="item-wrapper">
            <div className="images">
                <img src={url} alt={title}/>
            </div>
            
            <div className="item-description">
                <div>
                    <h2 className="title">{title}</h2>
                </div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Item;