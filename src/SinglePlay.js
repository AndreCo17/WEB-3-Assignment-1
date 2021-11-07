import React, { Component } from 'react'
import './css/SinglePlay.css'

 class SinglePlay extends Component {
    render() {
        return (
            
            <table className="plays-list">
             <tr className="row">
                <td className="play-title"> {this.props.title}</td>
                <td className="play-year"> {this.props.likelyDate}</td>
                <td className="fave-button">
                    <button className="add-to-fave-button">Add</button>
                </td>
                <td className="view-button">
                    <button className="view-play">View</button>
                </td>
            </tr>
            </table>
                  
        )
    }
}

export default SinglePlay;
