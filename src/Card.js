import React from 'react';

const Card = ({name,score,url,img}) => {
    return(
        <div className="bg-lightest-blue navy dib br3 pa3 ma2 grow bw1 shadow-5 tc">
            <a href ={url} target="_blank" rel="noopener noreferrer" style={{textDecoration:0}}>
            <img alt="anime-logo" src={img} />
            <div>
                <h2>{name}</h2>
                <p className="b">Score : {score}</p>
            </div>
            </a>
        </div>
    );
}

export default Card;