import React from "react";
import "./newsitem.css"; // Import the CSS file

const Newsitem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div className="body1">
    <div className="news-card">
      <img
        src={imageUrl}
        className="news-card-img"
        alt="news"
      />
      <div className="news-card-body">
        <h5 className="news-card-title">{title}</h5>
        <p className="news-card-text">{description}</p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="news-card-btn">
          Read More
        </a>
        <p className="news-card-meta">
          <small>
            By {author ? author : "Unknown"} on {date.slice(0, 10)}
          </small>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Newsitem;
