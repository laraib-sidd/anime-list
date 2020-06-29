import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import {anime} from './anime';
import SearchBox from '../Components/SearchBox';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';

import {setSearchField} from '../actions';
class App extends Component {
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
                <ErrorBoundary>
                    <CardList anime={filteranime} />
                </ErrorBoundary>
            </Scroll>
            </div>
        )
    }
}

export default connect()(App);


