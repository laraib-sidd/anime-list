import React from 'react';

const Card = ({name,score,url}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw shadow-5 tc">
            <img alt="anime-logo" src={url} />
            <div>
                <h2>{name}</h2>
                <p>{score}</p>
            </div>
        </div>
    );
}

export default Card;