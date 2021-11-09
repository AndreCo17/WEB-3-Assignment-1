import React from "react";
import { Routes, Route } from "react-router-dom"
import HomeView from "./HomeView";
import PlayBrowser from "./PlayBrowser";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play : [], title: "" }

  //Updates the state of the title using the input made by user in its child (Filter) to be used in the List component
  // updateTitleHome = (e) => {
  //     this.setState({title : e})
  // }
}

  async componentDidMount() {
    const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ play : data });
    
}

    render() {
      return (
        <div>
          <Routes>
            <Route path="/" exact element={<HomeView />} />
            <Route path="/browse" element={<PlayBrowser play={this.state.play}
                                          title={this.state.title}/>} />
          </Routes>
        </div>
      )
      }
}

export default App;


