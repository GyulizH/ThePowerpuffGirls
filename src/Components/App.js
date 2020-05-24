import React from "react";
import { BrowserRouter, Route , Link } from 'react-router-dom'
import TvShowDetails from "./TvShowDetails";
import EpisodeDetail from "./EpisodeDetail";

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch('http://api.tvmaze.com/shows/6771')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route  path="/tvShowDetails" exact component={TvShowDetails} />
                        <Route  path="/episodes/:episodeId" exact component={EpisodeDetail} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
