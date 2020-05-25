import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import TvShowDetails from "./TvShowDetails";
import EpisodeDetail from "./EpisodeDetail";

class App extends React.Component{
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route  path="/" exact component={TvShowDetails} />
                        <Route  path="/episodes/:episodeId" exact component={EpisodeDetail} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
