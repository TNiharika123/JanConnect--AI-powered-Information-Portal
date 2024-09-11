import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import "./news.css";
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchNews(page);  
  }, [page]);

  const fetchNews = async (page) => {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.articles) {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      }
    } catch (error) {
      console.error("Error fetching the news data:", error);
    }
  };

  const handleNextClick = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
    }
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const totalPages = Math.ceil(totalResults / props.pageSize);

  return (
    <div className="news-container1 my-3">
      <h2 className="news2 text-center my-2">DailyNEWS - Top Headlines Daily</h2>
      <hr />
      <div className="row">
        {articles.map((element) => (
          <div className="col-md-4 my-2" key={element.url}>
            <Newsitem
              title={element.title ? element.title.slice(0, 45) : ""}
              description={
                element.description
                  ? element.description.slice(0, 88)
                  : "This section is empty, go to Read More section to know more about the News"
              }
              imageUrl={
                element.urlToImage
                  ? element.urlToImage
                  : "https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2024/05/1280/720/mpd-shooting-5-30.jpg?ve=1&tl=1"
              }
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-around my-3">
        <button
          disabled={page <= 1}
          type="button"
          onClick={handlePrevClick}
          className="btn btn-dark"
          aria-label="Previous Page"
        >
          &larr; Prev
        </button>
        <button
          disabled={page >= totalPages}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
          aria-label="Next Page"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
    };

  News.defaultProps = {
    country: "in",
    category: "technology",
    pageSize: 8,
  };

  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string.isRequired,
  };

  export default News;