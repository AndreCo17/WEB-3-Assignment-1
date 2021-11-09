import React, { Component } from 'react'
import './css/Favourites.css'

class Favourites extends Component {

    //Curerntly not working
    //Takes the list from parent, checks to for the matching id within the list. If it cannot find it, then push else it does not add it
    updateFavourites = (fav) => {
        const copyFave = [this.props.favesList];
        const favorite = copyFave.find((p) => p.id === fav.id);
        if (!favorite) {
            copyFave.push(fav);
        } else {
            const index = copyFave.indexOf(favorite);
            copyFave.splice(index,1);
        }
        this.props.setFavorites(copyFave);
        localStorage.setItem("favorites", JSON.stringify(copyFave))
    }
    
    render() {
        return (
            <div>
                <div className="faves panels"> 
                <h2 className="panel-header"> Favourites </h2>
                <table className="fave-list">
                    <tr className="row">
                <td className="fave-title"> {this.props.title}</td>
                <td className="del">
                    {/* Button to delete the added favorite plays from the list using onClick */}
                    <button className="del-button" onClick={(e)=>{this.updateFavourites(this.props.title);}}>Del</button>
                </td>
            </tr>
            </table>
                </div>
                
            </div>
        )
    }
}

export default Favourites;
