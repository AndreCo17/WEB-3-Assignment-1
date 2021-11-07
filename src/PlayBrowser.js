import React, { Component } from 'react'
import Header from "./Header";
import Favourites from "./Favourites";
import Filters from "./Filters";
import List from "./List";
import SinglePlay from "./SinglePlay";

import './css/PlayBrowser.css'


class PlayBrowser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="react-container">
                <header className="header"><Header /></header>
                <section className="favourites section"><Favourites/></section>
                <section className="filters section"><Filters/></section>
                <section className="play-list section"><List play={this.props.play}/></section>
            </div>
        )
    }
}

export default PlayBrowser;
