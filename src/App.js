import React, { Component } from 'react'
import CardList from './CardList'
import {anime} from './anime'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            anime : anime,
            Searchfield : ''
        }
    }
    onSearchChange = (event) => {
        this.setState({Searchfield:event.target.value})
    }
    render() {
        const filteranime = this.state.anime.filter(anim => {
            return anim.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        }
    )
        return (
            <div className="tc">
            <h1 className="f1">My Anime List</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList anime={filteranime} />
            </Scroll>
            </div>
        )
    }
}