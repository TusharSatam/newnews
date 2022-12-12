import React from "react";
import "./NewsItem.css";
import defaultImage from "./defaultImage.jfif"
const NewsItem = (props) => {
  return (
    <div>
      {/* <div className="card-group"> */}
        <div className="card my-3" >
          <img src={props.urlToImage?props.urlToImage:defaultImage} className="card-img-top" alt="..." style={{height:"15rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{props?.title}</h5>
            <p className="card-text">
            {props?.description}
            </p>
            <a href={props?.url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            <p className="card-text">
              <small className="text-muted">Date: {props?.publishedAt.slice(0,10)} | Time: {props?.publishedAt.slice(11,-1)}</small>
            </p>
          </div>
        </div>
      
      </div>
    // </div>
  );
};

export default NewsItem;
