import React, { Component } from 'react'
import CardList from './CardList'
import {anime} from './anime'
import SearchBox from './SearchBox'

export default class App extends Component {
    render() {
        return (
            <div className="tc">
            <h1>My Anime List</h1>
            <SearchBox />
            <CardList anime={anime}/>
            </div>
        )
    }
}