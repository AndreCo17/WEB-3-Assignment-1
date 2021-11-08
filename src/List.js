import React, { Component } from 'react'
import SinglePlay from './SinglePlay'
import './css/List.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType : 'asc',
            loading : false
        };
    }
    
    
    
    render() {
        
        let playsCopy = [...this.props.play];
        console.log(this.props);
            return (
                <section>
                <div className="list panels">
                <h2 className="panel-header">Play List</h2>
                    <ul className="plays">
                    <div>
                        {this.state.loading ? <div><img src="../images/loading.gif"></img></div> : 
                        <div>
                        <table>
                            <th className="th-title" onClick={()=>this.onSort(this.state.sortType==="desc" ? "asc" : "desc")}>Title</th>
                            <th className="th-year">Year</th>
                        </table>
                            <div>
                            
                        {playsCopy.filter((p)=>{
                            if (this.props.title == "") {
                                return p
                            } else if (p.title.toLowerCase().includes(this.props.title.toLowerCase())) {
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

