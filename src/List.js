import React, { Component } from 'react'
import SinglePlay from './SinglePlay'
import './css/List.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType : 'asc',
            loading : false,
            fave : ""
        };
    }
    
    handleAddToFaveToBrowser = (e) => {
        this.props.id(e);
    }
    
    render() {
        //Create a shallow copy of the plays array
        let playsCopy = [...this.props.play];
        console.log(this.props);
            return (
                <section>
                <div className="list panels">
                <h2 className="panel-header">Play List</h2>
                    <ul className="plays">
                    <div>
                        {this.state.loading ? <div><img src="../images/loading.gif" alt="loading"></img></div> : 
                        <div>
                        <table>
                            <th className="th-title" onClick={()=>this.onSort(this.state.sortType==="desc" ? "asc" : "desc")}>Title</th>
                            <th className="th-year">Year</th>
                        </table>
                            <div>
                        {/* Takes in the "title" from PlayBrowser, it then uses a filter() to match the input to the plays list and returns the matched ones
                            - Title Search Function is fully functional
                            - Genre is fully functional. Used an OR operator, therefore the results for genre and title search will show up. Had troubles with using 'AND' where
                                if I tried searching a title and genre <select> does not have a value, it does not showing anything on the list.  
                            - Before textbox input works
                            - After textbox input is not functional at the moment*/}
                        {playsCopy.filter((p)=>{
                            if (this.props.title === "" && this.props.genre === "" && this.props.likelyDate === "") {
                                return p
                            } else if ((p.title.toLowerCase().includes(this.props.title.toLowerCase()))
                                        || (p.genre == this.props.genre)
                                        ) {
                                return p
                            }
                        }).map((p, index) => <SinglePlay id={p.id} title={p.title} filename={p.filename}
                        likelyDate={p.likelyDate} genre={p.genre} wiki={p.wiki} gutenberg={p.gutenberg}
                        shakespeareOrg={p.shakespeareOrg} synopsis={p.synopsis} desc={p.desc} key={index}/>)}
                            </div>
                        </div>}
                    </div>
                        
                    </ul>
                </div>
            </section>
        )
    }
}

