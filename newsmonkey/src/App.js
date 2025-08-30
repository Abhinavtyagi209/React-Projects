import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import LoadingBar from "react-top-loading-bar";
import News from "./components/News"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  state = 
{
  progress : 0
}
  setprogress=(p)=>
  {
    this.setState({
      progress : p
    })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
           <Search/> 
         <Routes>
  <Route path="/" element={<News setprogress= {this.setprogress} key="general" category="general" country="in" />} />
  <Route path="/entertainment" element={<News setprogress= {this.setprogress} key="entertainment" category="entertainment" country="in" />} />
  <Route path="/sports" element={<News setprogress= {this.setprogress} key="sports" category="sports" country="in" />} />
  <Route path="/general" element={<News setprogress= {this.setprogress} key="general2" category="general" country="in" />} />
  <Route path="/science" element={<News setprogress= {this.setprogress} key="science" category="science" country="in" />} />
  <Route path="/technology" element={<News setprogress= {this.setprogress} key="technology" category="technology" country="in" />} />
</Routes>
        </Router>
      </div>
    );
  }
}
