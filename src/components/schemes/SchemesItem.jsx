import React from "react";
import "./schemesitem.css"; // Import the CSS file for styling

const SchemesItem = (props) => {
  const { title, description, imageUrl, url, serialNo } = props;

  return (
    <div className="body1">
      <div className="scheme-card">
        <img
          src={imageUrl}
          className="scheme-card-img"
          alt="scheme"
        />
        <div className="scheme-card-body">
          <h5 className="scheme-card-title">
            {serialNo}. {title}
          </h5>
          <p className="scheme-card-text">
            {description
              ? description.slice(0, 88)
              : "This section is empty, click Read More to explore the scheme."}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="scheme-card-btn"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchemesItem;
