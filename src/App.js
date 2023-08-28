import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./cmp/Navi";
import News from "./cmp/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (prog)=>{
    this.setState({progress: prog})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#0d6efd"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navi />
          <Routes>
            <Route
              path="/"
              element={<News setProgress={this.setProgress} key="1" category="general" />}
            />
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} key="2" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} key="3" category="entertainment" />}
            />
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} key="4" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} key="5" category="technology" />}
            />
            <Route
              path="/science"
              element={<News setProgress={this.setProgress} key="6" category="science" />}
            />
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} key="7" category="health" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
