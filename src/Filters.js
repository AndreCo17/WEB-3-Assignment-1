import React from 'react'
import './css/Filters.css'

class Filters extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <form className="filters panels" >
                    <h2 className="panel-header"> Play Filters </h2>

                        <div className="input-content">
                            
                            <div className="field-body">
                                <h3 className="label">Title</h3>
                                    <input className="title text-input" type="text" name="title" placeholder="Title..."/>
                                </div>
                            

                            <div className="field-body">
                                <h3 className="label">Year</h3>
                                    <div>
                                        <input type="radio"/>
                                    <span>Before</span>
                                        <input className="before text-input" type="text" name="title"/>
                                    </div>
                                    <div>
                                        <input type="radio"/>
                                    <span>After</span>
                                        <input className="after text-input" type="text" name="title"/>
                                    </div>
                                </div>

                                <div className="field-body">
                                <h3 className="label">Genre</h3>
                                    <select className="genre">
                                        <option value="">Choose one...</option>
                                    </select>
                                </div>
                        
                        </div>
                </form>
            </section>
        )
    }
}

export default Filters;
