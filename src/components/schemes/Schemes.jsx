import React, { useEffect, useState } from "react";
import SchemesItem from "./SchemesItem";
import "./schemes.css";
import PropTypes from 'prop-types';

const Schemes = (props) => {
  const [schemes, setSchemes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchSchemes(page);  
  }, [page]);

  const fetchSchemes = async (page) => {
    // This is a placeholder for fetching schemes data. Replace with your actual API or data.
    const schemesData = [
        {
            // serialNo: 7,
            title: "President visits Ram Mandir",
            description: "President visits Ram Mandir and performs puja.",
            url: "https://timesofindia.indiatimes.com/city/lucknow/president-droupadi-murmu-visits-ram-mandir-amid-rahul-gandhis-remark-row/articleshow/109763778.cms",
            imageUrl: '/mandir_gif.webp'
          },
      {
        // serialNo: 1,
        title: "Tracing the roots of Banarasi saris",
        description: "The Banarasi sari commonly uses motifs of jasmine flowers, marigolds, paisleys, animals, and birds.",
        url: "https://indianexpress.com/article/lifestyle/fashion/banarasi-sari-varanasi-wedding-staple-9495787/",
        imageUrl: "/saree_emoji.webp"
      },
      {
        // serialNo: 2,
        title: "Why culture was recognized as a goal",
        description: "This milestone marks a paradigm shift in the global development strategy as it underscores culture as a fundamental pillar for inclusive and sustainable development.",
        url: "https://indianexpress.com/article/opinion/columns/why-culture-was-recognised-as-a-goal-for-the-first-time-under-indias-g20-presidency-9184873/",
        imageUrl: '/culture_emoji.webp'
      },
      {
        // serialNo: 3,
        title: "India@75, Looking at 100: We need to look at art in context, not through a colonial lens",
        description: "A discussion on the need to retain the diversity of context in understanding culture.",
        url: "https://indianexpress.com/article/opinion/columns/india75-looking-at-100-we-need-to-look-at-art-in-context-not-through-a-colonial-lens-8661375/",
        imageUrl: '/diversity_emoji.webp'

    },

  {
    // serialNo: 4,
    title: "National Tourism Day: Did you know about these lesser-known UNESCO World Heritage Sites in India?",
    description: "India offers cultural, historical, archaeological, and natural tourism opportunities.",
    url: "https://indianexpress.com/article/lifestyle/art-and-culture/national-tourism-lesser-known-unesco-world-heritage-sites-in-india-8403319/",
   imageUrl: '/india_gif.webp'
},
      
    {
        // serialNo: 5,
        title: "The Influence of Indian Classical Music on Global Music Trends",
        description: "How Indian classical music has shaped and influenced various global music genres.",
        url: "https://www.bbc.com/news/world-asia-india-38915853",
        imageUrl: '/music_emoji.webp'
      },
      {
        // serialNo: 6,
        title: "Celebrating Diwali: The Festival of Lights Around the World",
        description: "A look at how Diwali is celebrated by Indian communities globally.",
        url: "https://timesofindia.indiatimes.com/etimes/trending/countries-that-celebrate-diwali-just-like-india/photostory/105153045.cms",
        imageUrl: '/diwali_gif.webp'
      },
      {
        // serialNo: 6,
        title: "Enduring essence of Indian classical dance: A mix of sadhana & spirituality",
        description: "A look at how Diwali is celebrated by Indian communities globally.",
        url: "https://www.business-standard.com/lifestyle/enduring-essence-of-indian-classical-dance-a-mix-of-sadhana-spirituality-124081500254_1.html",
        imageUrl: '/dance.webp'
      },
      {
        // serialNo: 6,
        title: "Yoga is India's biggest gift to world",
        description: "A look at how Diwali is celebrated by Indian communities globally.",
        url: "https://economictimes.indiatimes.com/news/india/yoga-is-indias-biggest-gift-to-world-amit-shah/articleshow/111162619.cms?from=mdr",
        imageUrl: '/yoga.webp'
      },
      
    
    ];

    // Simulate paginated data
    const start = (page - 1) * props.pageSize;
    const paginatedSchemes = schemesData.slice(start, start + props.pageSize);

    setSchemes(paginatedSchemes);
    setTotalResults(schemesData.length); // Set total results from the full list
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
    <div className="schemes-container my-3">
      <h2 className="text-center my-2">Government Schemes</h2>
      <hr />
      <div className="row">
        {schemes.map((scheme) => (
          <div className="col-md-4 my-2" key={scheme.url}>
            <SchemesItem
              serialNo={scheme.serialNo}
              title={scheme.title}
              description={scheme.description}
              imageUrl={scheme.imageUrl}
              url={scheme.url}
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

Schemes.defaultProps = {
  pageSize: 5,
};

Schemes.propTypes = {
  pageSize: PropTypes.number,
};

export default Schemes;
