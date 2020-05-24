import React from "react";
import './episodedetails.scss'


class  EpisodeDetail extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            episode: {}
        }
    }
    componentDidMount() {
        const handle = this.props.match.params
        console.log("handle", handle.episodeId)
         fetch('http://api.tvmaze.com/episodes/657308')
             .then(response => response.json())
             .then(data => this.setState( { episode : data}))
     }

    createMarkup() {
        return {__html: this.state.episode.summary}; };

    render() {
        console.log(this.state.episode)
        return (
            <div className="Episode">
                <div className="Episode--image">
                    <img src="http://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg"/>
                </div>
                <div className="Episode--content">
                    <p className="Episode--content-title">
                        {this.state.episode.name}
                    </p>
                    <p className="Episode--content-text"
                       dangerouslySetInnerHTML={this.createMarkup()}
                    >
                    </p>
                </div>
            </div>
        );
    }
}

export default EpisodeDetail
