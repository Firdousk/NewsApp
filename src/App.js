import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,  Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =(props)=> {
 const apiKey= process.env.REACT_APP_NEWS_API;
const [progress,setProgess]=useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progess={progress}
       />
        <Routes>
          <Route exact path="/" element={<News setProgess={setProgess} apiKey ={apiKey} key="general" pageSize={8} country='in' category='general'/>} />
          <Route exact path="/business" element={<News setProgess={setProgess} apiKey ={apiKey} key="business" pageSize={8} country='in' category='Business'/> }/>
          <Route exact path="entertainment"  element={<News setProgess={setProgess} apiKey ={apiKey}key="entertainment" pageSize={8} country='in' category='Entertainmet'/>} />
          <Route exact path="/general" element={<News setProgess={setProgess} apiKey ={apiKey}key="general" pageSize={8} country='in' category='General'/>} />
          <Route exact path="/health" element={<News setProgess={setProgess} apiKey ={apiKey}key="health" pageSize={8} country='in' category='Health' />}/>
          <Route exact path="/science" element={<News setProgess={setProgess} apiKey ={apiKey}key="science" pageSize={8} country='in' category='Science' />}/>
          <Route exact path="/sports" element={<News setProgess={setProgess} apiKey ={apiKey}key="sports" pageSize={8} country='in' category='Sports' />}/>
          <Route exact path="/technology" element={<News setProgess={setProgess} apiKey ={apiKey}key="technology" pageSize={8} country='in' category='Technology' />}/>
 
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;

