import React from "react";
import './episodedetails.scss'
import {Link} from "react-router-dom";


class  EpisodeDetail extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            episode: {},
            apiResponded:false
        }
    }
    componentDidMount() {
        const handle = this.props.match.params
         fetch(`http://api.tvmaze.com/episodes/${handle.episodeId}`)
             .then(response => response.json())
             .then(data =>  this.setState( { episode : data , apiResponded : true}))
     }

    createMarkup() {
        return {__html: this.state.episode.summary}; };

    render() {
        return this.state.apiResponded ? (
            <div className="Episode">
                <div className="Episode--image">
                    <img src={this.state.episode.image.medium} alt="pic"/>
                </div>
                <div className="Episode--content">
                    <p className="Episode--content-title">
                        {this.state.episode.name}
                    </p>
                    <p className="Episode--content-text"
                       dangerouslySetInnerHTML={this.createMarkup()}
                    >
                    </p>
                    <Link to="/">
                        <button>BACK</button>
                    </Link>
                </div>
            </div>
        ) : null
    }
}

export default EpisodeDetail
