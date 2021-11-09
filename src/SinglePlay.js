import React, { Component } from 'react'
import './css/SinglePlay.css'

 class SinglePlay extends Component {

    handleAddToFave = (e) => {
        this.props.id(e);
    }

    render() {
        return (
            
            <table className="plays-list">
             <tr className="row">
                <td className="play-title"> {this.props.title}</td>
                <td className="play-year"> {this.props.likelyDate}</td>
                <td className="fave-button">
                    {/* Button to add to favorites list */}
                    <button className="add-to-fave-button" onClick={(e)=>{this.handleAddToFave(this.props.id);}}>Add</button>
                </td>
                <td className="view-button">
                    {/* Not functional */}
                    <button className="view-play">View</button>
                </td>
            </tr>
            </table>
                  
        )
    }
}

export default SinglePlay;
