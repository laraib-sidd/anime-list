import React from 'react';

const Card = ({name,score,url}) => {
    return(
        <div className="bg-lightest-blue navy dib br3 pa3 ma2 grow bw1 shadow-5 tc">
            <img alt="anime-logo" src={url} />
            <div>
                <a href ="" style={{textDecoration:0}}>
                <h2 className="shadow-2">Title : {name}</h2>
                </a>
                <p className="b">Score : {score}</p>
            </div>
        </div>
    );
}

export default Card;