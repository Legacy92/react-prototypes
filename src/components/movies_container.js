import React, { Component } from 'react';
import Movie from './movie.js';
import axios from 'axios';


class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((resp) => {
            console.log('Resp:', resp);
            this.setState({
                movies: resp.data.feed.entry
            })
        });
    }

    render() {
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>;
        });
        console.log('The State is:', this.state);
        return (
            <div>
                { movieList }
            </div>
        )
    }
}

export default MoviesContainer;


