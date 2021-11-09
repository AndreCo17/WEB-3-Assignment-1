import React from 'react'
import './css/Filters.css'

class Filters extends React.Component {

    //handles input from title search box and passes it to its parent (PlayBrowser)
    handleTitleSearch = (e) => {
        this.props.title(e);
    }
    //handles selection from title search box and passes it to its parent (PlayBrowser)
    handleGenreChange = (e) => {
        this.props.genre(e);
      };

    handleBeforeChange = (e) => {
        this.props.likelyDate(e);
    }
    handleAfterChange = (e) => {
        this.props.likelyDate(e);
    }
    //Extracts the genre data from the API and returns a formatted <option> tag with the genres in it
    filterGenres = () => {
        let genres = this.props.play.map((p) => p.genre);
        let filteredGenres = genres.filter(
          (item, index) => genres.indexOf(item) === index
        );
        return filteredGenres.map((p) => (
          <option>
            {p}
          </option>
        ));
      };

    render() {
        
        return (
            <section>
                <form className="filters panels" >
                    <h2 className="panel-header"> Play Filters </h2>

                        <div className="input-content">
                            {/* Title Filter/Search Box */}
                            <div className="field-body">
                                <h3 className="label">Title</h3>
                                    <input className="title text-input"
                                    type="text"
                                    name="title"
                                    placeholder="Title..."
                                    defaultValue={this.props.title}
                                    onChange={(e)=>{this.handleTitleSearch(e.target.value);}} />
                                </div>
                            
                            {/* Radio inputs for plays that are before and after given the year */}
                            <div className="field-body">
                                <h3 className="label">Year</h3>
                                    <div>
                                        <input type="radio" name="date-radio"/>
                                    <span>Before</span>
                                        <input className="before text-input"
                                        type="text"
                                        name="before-date"
                                        defaultValue={this.props.likelyDate}
                                        onChange={(e)=>{this.handleBeforeChange(e.target.value);}}/>
                                    </div>
                                    <div>
                                        <input type="radio" name="date-radio"/>
                                    <span>After</span>
                                        <input className="after text-input"
                                        type="text"
                                        name="after-date"
                                        defaultValue={this.props.likelyDate}
                                        onChange={(e)=>{this.handleAfterChange(e.target.value);}}/>
                                    </div>
                                </div>
                            {/* Genre selection filter */}
                            <div className="field-body">
                                <h3 className="label">Genre</h3>
                                    <select className="genre"
                                            defaultValue={this.props.genre}
                                            onClick={(e)=>{this.handleGenreChange(e.target.value);}}>
                                        <option value="">Choose one...</option>
                                        {this.filterGenres()}
                                    </select>
                                </div>
                        
                        </div>
                </form>
            </section>
        )
    }
}

export default Filters;
