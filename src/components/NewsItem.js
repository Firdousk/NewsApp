import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props ;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
