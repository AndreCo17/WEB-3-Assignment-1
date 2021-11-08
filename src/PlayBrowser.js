import React, { Component } from 'react'
import Header from "./Header";
import Favourites from "./Favourites";
import Filters from "./Filters";
import List from "./List";
import './css/PlayBrowser.css'


class PlayBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" }
    }

    updateTitleChange = (e) => {
        this.setState({title : e})
    }

    render() {
        console.log(this.title);
        return (
            
            <div className="react-container">
                <header className="header"><Header /></header>
                <section className="favourites section"><Favourites/></section>
                <section className="filters section"><Filters genre={this.props.genre} play={this.props.play} title={this.updateTitleChange}/></section>
                <section className="play-list section"><List play={this.props.play} title={this.state.title}/></section>
            </div>
        )
    }}

export default PlayBrowser;
