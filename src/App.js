import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom"
import HomeView from "./HomeView";
import PlayBrowser from "./PlayBrowser";
import About from './About.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play : [], title: "" }
  //Updates the state of the title using the input made by user in its child (Filter) to be used in the List component

  let updateTitleHome = (e) => {
      this.setState({title : e})
  }
}

  async componentDidMount() {
    const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ play : data, loading: false });
    
}

    render() {
      return (
        <div>
          <Routes>
            <Route path="/" exact element={<HomeView title={this.updateTitleHome}/>} />
            <Route path="/browse" element={<PlayBrowser play={this.state.play}
                                          title={this.state.title}/>} />
          </Routes>
        </div>
      )
      }
}

export default App;


