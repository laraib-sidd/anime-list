import React from 'react'
import Card from './Card';


const CardList = ({anime}) => {
    return(
        <div>
        {
        anime.map(anime => {
            return(
                <Card key={anime.id}
                name={anime.name}
                score={anime.score}
                img={anime.image}
                url={anime.url}
                />
                  )
                            }
                )
        }
        </div>
    );

}

export default CardList;