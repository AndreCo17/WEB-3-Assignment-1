import React from 'react'
import './css/HomeView.css'
import { Link } from 'react-router-dom';

class HomeView extends React.Component {

    handleTitleSearchHome = (e) => {
        this.props.title(e);
    }

    render() {
        return (
        <div className="homeview-container">
            <form >
                <div className="input-fields">
                    <h1>Play Browser</h1>
                    <div> Title
                    <input className="filter-input" type="text" name="title"></input>
                    </div>
                    
                        <Link className="show-match-link" to="/browse"><button className="show-match-button"
                            onChange={(e)=>{this.handleTitleSearchHome(e.target.value);}}>Show Matching Plays</button></Link>
                        <Link className="show-all-link" to="/browse"><button className="show-all-button">Show All Plays</button></Link>
                    
                </div>
            </form>
            <footer><a href="https://unsplash.com/photos/Byzlphz0gZs">Hero Image Source</a></footer>
        </div>
        )
    }
}
export default HomeView;
