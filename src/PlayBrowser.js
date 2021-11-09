import React, { Component } from 'react'
import Header from "./Header";
import Favourites from "./Favourites";
import Filters from "./Filters";
import List from "./List";
import './css/PlayBrowser.css'


class PlayBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", genre: "" , beforeInput: "", afterInput: ""}
    }
    //Updates the state of the title using the input made by user in its child (Filter) to be used in the List component
    updateTitleChange = (e) => {
        this.setState({title : e})
    }
    //Updates the state of the genre using the input made by user in its child (Filter) to be used in the List component
    updateGenreChange = (e) => {
        this.setState({genre : e})
    }
    //Updates the before
    updateBefore = (e) => {
        this.setState({beforeInput : e})
    }
    updateAfter = (e) => {
        this.setState({afterInput : e})
    }

    render() {
        return (
            
            <div className="react-container">
                <header className="header"><Header /></header>
                <section className="favourites section"><Favourites/></section>
                <section className="filters section"><Filters play={this.props.play}
                                                            title={this.updateTitleChange}
                                                            genre={this.updateGenreChange}
                                                            likelyDate={this.updateBefore}/></section>
                <section className="play-list section"><List play={this.props.play}
                                                            title={this.state.title}
                                                            genre={this.state.genre}
                                                            likelyDate={this.state.beforeInput}/></section>
            </div>
        )
    }}

export default PlayBrowser;
