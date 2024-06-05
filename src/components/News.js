import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
   
  static defaultProps={
   country:'in',
   pageSize:8,
   category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    category : PropTypes.string,
  }
  capitalizeFirstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        this.state = {articles:[],
        loading:false,
    page:1,
  totalResults:0};  
    document.title=`SAMACHAR-${this.capitalizeFirstLetter(this.props.category)}`
    }

    async updateNews(){
      this.props.setProgess(10);
     const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff73904ad68e42f385eed900986dbb30&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading :true});

      
      let data= await fetch(url);
      let parseData= await data.json()
      this.setState({articles:parseData.articles,
          totalResults:parseData.totalResults,
          loading :false});
       this.props.setProgess(100);   
    }
    async componentDidMount(){
       this.updateNews()
    }
     handlePrevious=async()=>{
       this.setState({page:this.state.page-1})
       this.updateNews()
    }
    handleNext=async()=>{
       this.setState({page:this.state.page+1})
       this.updateNews()
    }
    fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ff73904ad68e42f385eed900986dbb30&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
      let data= await fetch(url);
      let parseData= await data.json()
      this.setState({articles:this.state.articles.concat(parseData.articles),
          totalResults:parseData.totalResults,
          })
    };

  render() {
    return (
      <>
      {/*<div className='container my-3'>*/}
        <h3 className='text-center'>SAMACHAAR- Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
        {this.state.loading && <Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}>
           <div className='container'>
        <div className='row'>
        {this.state.articles.map((element)=>{
        return(<div className='col md-4' key={element.url}>
        <NewsItem title={element.title ?element.title.slice(0,45):""} description={element.description ?element.description.slice(0,90):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> </div>)
        })} 
        </div>
        </div>
        </InfiniteScroll>
     {/*  Next Previous Button
     <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&laquo; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNext}>Next &raquo;</button>
        </div>
      </div>*/}
      </>
    )
  }
}

export default News
