import React from 'react'
import Card from './Card';


const CardList = ({anime}) => {
    return(
        <div>
        {
        anime.map(anime => {
            return(
                <Card key={anime.title}
                name={anime.title}
                score={anime.score}
                url={anime.url} />
                  )
                            }
                )
        }
        </div>
    );

}

export default CardList;