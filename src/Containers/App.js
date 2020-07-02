import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import {anime} from './anime';
import SearchBox from '../Components/SearchBox';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';

import {setSearchField} from '../actions';

const mapStatetToProps = state => {
    return {searchField: state.searchField}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            anime: anime
        }
    }

    render() {
        const {anime} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteranime = anime.filter(anim => {
            return anim.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (<div className="tc">
            <h1 className="f1">
                My Anime List
            </h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList anime={filteranime}/>
                </ErrorBoundary>
            </Scroll>
        </div>)
    }
}

export default connect(mapStatetToProps, mapDispatchToProps)(App);
