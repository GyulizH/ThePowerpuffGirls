import React from "react";
import './tvshowdetails.scss'
import {  Link } from 'react-router-dom'


class  TvShowDetails extends React.Component{
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this)
        this.state = {
            tvShow: {},
            episodes: []

        }
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows/6771')
            .then(response => response.json())
            .then(data => this.setState( { tvShow : data}))
        fetch('http://api.tvmaze.com/shows/6771/episodes')
            .then(response => response.json())
            .then(data => this.setState( { episodes : data}) )
    }


    // I had to use this trick, because I was receiving paragraph with html tags and I wanted to remove the tags.
    createMarkup() {
        return {__html: this.state.tvShow.summary}; };

    renderEpisodeList(){
        return this.state.episodes.map((episode) => {
            return (
                <Link to={`/episodes/${episode.id}`} key={episode.id}>
                    <button>{episode.name}</button>
                </Link>
            )
        })



    }
    render() {
        return (
            <div className="TvShow">
                <div className="TvShow__details">
                    <div className="TvShow__details--image">
                        <img src = "http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg" alt="pic"/>
                    </div>
                    <div className="TvShow__details--content">
                        <p className="TvShow__details--content-title">{this.state.tvShow.name}</p>
                        <p className="TvShow__details--content-text" dangerouslySetInnerHTML={this.createMarkup()}></p>
                    </div>
                </div>
                <div className="TvShow__EpisodeList">
                    <p> EPISODES </p>
                   {this.renderEpisodeList()}
                </div>
            </div>
        )
    }
}

export default TvShowDetails
