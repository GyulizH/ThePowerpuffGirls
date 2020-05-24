import React from "react";
import './tvshowdetailsstyle.css'
import './tvshowdetails.scss'
import {  Link } from 'react-router-dom'


class  TvShowDetails extends React.Component{
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this)
        this.state = {
            tvShow: {},
            episodes: {}

        }
    }
    //this.setState( { episodes : data})

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows/6771')
            .then(response => response.json())
            .then(data => this.setState( { tvShow : data}))
        fetch('http://api.tvmaze.com/shows/6771/episodes')
            .then(response => response.json())
            .then(data => this.setState( { episodes : data}) )
    }

    createMarkup() {
        return {__html: this.state.tvShow.summary}; };

    renderEpisodeList(){
        let episodes = [{
            zero: {
                id: 657308,
                image: {
                    medium: "http://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg",
                    original: "http://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg"
                },
                name: "Escape from Monster Island",
                number: 1,
                runtime: 11,
                season: 1,
                summary: "<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
                url: "http://www.tvmaze.com/episodes/657308/the-powerpuff-girls-1x01-escape-from-monster-island",
                _links:
                    {
                        href: "http://api.tvmaze.com/episodes/657308"
                    }
    }
    }]

        return episodes.map((episode) => {
            return (
                <Link to={`/episodes/${episode.zero.id}`}>
                    <button>{episode.zero.name}</button>
                </Link>
            )
        })



    }
    render() {

        // for (let [key, value] of Object.entries(this.state.episodes)) {
        //     console.log(`${key}: ${value}`);
        // }
        // console.log(this.state.episodes)
        return (
            <div className="TvShow">
                <div className="TvShow__details">
                    <div className="TvShow__details--image">
                        <img src = "http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg"/>
                    </div>
                    <div className="TvShow__details--content">
                        <p className="TvShow__details--content-title">{this.state.tvShow.name}</p>
                        <p className="TvShow__details--content-text" dangerouslySetInnerHTML={this.createMarkup()}></p>
                    </div>
                </div>
                <div className="TvShow__EpisodeList">
                   {this.renderEpisodeList()}
                </div>
            </div>
        )
    }
}

export default TvShowDetails
