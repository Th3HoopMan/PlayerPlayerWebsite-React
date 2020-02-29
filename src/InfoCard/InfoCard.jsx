import React from 'react';
import './InfoCard.css';

const infoCard = ({name, city, social, game, children}) => {
    return(
        <div>
            <h4>{name} ({city})</h4>
            <h4>{social}</h4>
            <h4>Favorite Game: {game}</h4>
            <p>
                {children}
            </p>
        </div>
    );
}

export default infoCard;