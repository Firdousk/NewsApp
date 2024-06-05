import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <div style={{ position: 'absolute', right: '0', justifyContent: 'flrx-end', display: 'flex' }}>
            <span className="badge rounded-pill bg-danger" style={{ zIndex: "1", left: "90%" }}>{source}
            </span></div>
          <img className="card-img-top" src={!imageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imageUrl} alt="Card  cap" />
          <div className="card-body">

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <Link rel="noreferrer" to={url} target='_blank' className="btn btn-sm btn-dark">Read More</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
