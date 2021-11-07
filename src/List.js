import React, { Component } from 'react'
import SinglePlay from './SinglePlay'
import './css/List.css'

export default class List extends Component {

    state = {
        loading: false
    };

    render() {
        return (
            <section>
                <div className="list panels">
                <h2 className="panel-header">Play List</h2>
                    <ul className="plays">
                    <div>
                        {this.state.loading ? <div>loading...</div> : 
                        <div>
                        {
                        this.props.play.map((p, index) => <SinglePlay id={p.id} title={p.title} filename={p.filename}
                        likelyDate={p.likelyDate} genre={p.genre} wiki={p.wiki} gutenberg={p.gutenberg} shakespeareOrg={p.shakespeareOrg} synopsis={p.synopsis} desc={p.desc} key={index}/>)
                        }
                        </div>}
                    </div>
                        
                    </ul>
                </div>
            </section>
        )
    }
}

