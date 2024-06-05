import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state={progress:10}

  apiKey= process.env.REACT_APP_NEWS_API;
setProgess=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
          <Route exact path="/" element={<News setProgess={this.setProgess} apiKey ={this.apiKey} key="general" pageSize={8} country='in' category='general'/>} />
          <Route exact path="/business" element={<News setProgess={this.setProgess} apiKey ={this.apiKey} key="business" pageSize={8} country='in' category='Business'/> }/>
          <Route exact path="entertainment"  element={<News setProgess={this.setProgess} apiKey ={this.apiKey}key="entertainment" pageSize={8} country='in' category='Entertainmet'/>} />
          <Route exact path="/general" element={<News setProgess={this.setProgess} apiKey ={this.apiKey}key="general" pageSize={8} country='in' category='General'/>} />
          <Route exact path="/health" element={<News setProgess={this.setProgess} apiKey ={this.apiKey}key="health" pageSize={8} country='in' category='Health' />}/>
          <Route exact path="/science" element={<News setProgess={this.setProgess} apiKey ={this.apiKey}key="science" pageSize={8} country='in' category='Science' />}/>
          <Route exact path="/sports" element={<News setProgess={this.setProgess} apiKey ={this.apiKey}key="sports" pageSize={8} country='in' category='Sports' />}/>
          <Route exact path="/technology" element={<News setProgess={this.setProgess} apiKey ={this.apiKey}key="technology" pageSize={8} country='in' category='Technology' />}/>
 
        </Routes>
        </Router>
      </div>
    )
  }
}



