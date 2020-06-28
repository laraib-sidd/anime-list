import React from 'react';

const Card = ({name,score,url,img}) => {
    return(
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw1 shadow-5 tc">
            <a href ={url} target="_blank" rel="noopener noreferrer" style={{textDecoration:0}}>
            <img alt="anime-logo" src={img} />
            <div>
                <h2 className="black">{name}</h2>
                <p className="b green">Score : {score}</p>
            </div>
            </a>
        </div>
    );
}

export default Card;