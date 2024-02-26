import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
   
    constructor(){
        super();
        this.state = {articles:[],
        loading:false,
    page:1};
        
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ff73904ad68e42f385eed900986dbb30&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading :true})
        let data= await fetch(url);
        let parseData= await data.json()
        console.log(parseData)
        this.setState({articles:parseData.articles,
            totalResults:parseData.totalResults,
            loading :false})
    }
     handlePrevious=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ff73904ad68e42f385eed900986dbb30&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        this.setState({loading :true})
        let data= await fetch(url);
        let parseData= await data.json()
       
        this.setState({articles:parseData.articles,
       page:this.state.page -1,
       loading:false});
    }
    handleNext=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ff73904ad68e42f385eed900986dbb30&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading :true})
        let data= await fetch(url);
        let parseData= await data.json()
        
        this.setState({articles:parseData.articles,
       page:this.state.page +1,
       loading:false});
        
    }

  render() {
    return (
      <div className='container my-3'>
        <h3>SAMACHAAR- Khabar AJ KI</h3>
        {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
        return(<div className='col md-4' key={element.url}>
        <NewsItem title={element.title ?element.title.slice(0,45):""} description={element.description ?element.description.slice(0,90):""} imageUrl={element.urlToImage} url={element.url}/> </div>)
        })} 
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&laquo; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNext}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
