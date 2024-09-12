import React, { useEffect, useState } from "react";
import SchemesItem from "./SchemesItem";
import "./schemes.css";
import PropTypes from 'prop-types';


const Schemes = (props) => {
  const [schemes, setSchemes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSchemes, setFilteredSchemes] = useState([]); 


  const tagsDictionary = {
    "President visits Ram Mandir": ["president", "ram mandir", "visit", "puja"],
    "Tracing the roots of Banarasi saris": ["banarasi", "sari", "textile", "fashion"],
    "Why culture was recognized as a goal": ["culture", "g20", "development"],
    "India@75, Looking at 100": ["art", "colonial", "context"],
    "National Tourism Day": ["unesco", "tourism", "heritage", "india"],
    "The Influence of Indian Classical Music": ["music", "classical", "global"],
    "Celebrating Diwali": ["diwali", "festival", "lights"],
    "Enduring essence of Indian classical dance": ["dance", "classical", "spiritual"],
    "Yoga is India's biggest gift to world": ["yoga", "gift", "world"]
  };


  const imageTagsDictionary = {
    "/mandir_gif.webp": ["mandir", "puja", "ram"],
    "/saree_emoji.webp": ["saree", "banarasi", "fashion"],
    "/culture_emoji.webp": ["culture", "g20", "development"],
    "/diversity_emoji.webp": ["diversity", "art", "colonial"],
    "/india_gif.webp": ["unesco", "india", "tourism"],
    "/music_emoji.webp": ["music", "classical", "global"],
    "/diwali_gif.webp": ["diwali", "festival", "lights"],
    "/dance.webp": ["dance", "classical", "spiritual"],
    "/yoga.webp": ["yoga", "gift", "world"]
  };


  useEffect(() => {
    fetchSchemes(page);
  }, [page]);


  const fetchSchemes = async (page) => {
    const schemesData = [
      {
        title: "President visits Ram Mandir",
        description: "President visits Ram Mandir and performs puja.",
        url: "https://timesofindia.indiatimes.com/city/lucknow/president-droupadi-murmu-visits-ram-mandir-amid-rahul-gandhis-remark-row/articleshow/109763778.cms",
        imageUrl: '/mandir_gif.webp'
      },
      {
        title: "Tracing the roots of Banarasi saris",
        description: "The Banarasi sari commonly uses motifs of jasmine flowers, marigolds, paisleys, animals, and birds.",
        url: "https://indianexpress.com/article/lifestyle/fashion/banarasi-sari-varanasi-wedding-staple-9495787/",
        imageUrl: "/saree_emoji.webp"
      },
      {
        title: "Why culture was recognized as a goal",
        description: "This milestone marks a paradigm shift in the global development strategy as it underscores culture as a fundamental pillar for inclusive and sustainable development.",
        url: "https://indianexpress.com/article/opinion/columns/why-culture-was-recognised-as-a-goal-for-the-first-time-under-indias-g20-presidency-9184873/",
        imageUrl: '/culture_emoji.webp'
      },
      {
        title: "India@75, Looking at 100: We need to look at art in context, not through a colonial lens",
        description: "A discussion on the need to retain the diversity of context in understanding culture.",
        url: "https://indianexpress.com/article/opinion/columns/india75-looking-at-100-we-need-to-look-at-art-in-context-not-through-a-colonial-lens-8661375/",
        imageUrl: '/diversity_emoji.webp'
      },
      {
        title: "National Tourism Day: Did you know about these lesser-known UNESCO World Heritage Sites in India?",
        description: "India offers cultural, historical, archaeological, and natural tourism opportunities.",
        url: "https://indianexpress.com/article/lifestyle/art-and-culture/national-tourism-lesser-known-unesco-world-heritage-sites-in-india-8403319/",
        imageUrl: '/india_gif.webp'
      },
      {
        title: "The Influence of Indian Classical Music on Global Music Trends",
        description: "How Indian classical music has shaped and influenced various global music genres.",
        url: "https://www.bbc.com/news/world-asia-india-38915853",
        imageUrl: '/music_emoji.webp'
      },
      {
        title: "Celebrating Diwali: The Festival of Lights Around the World",
        description: "A look at how Diwali is celebrated by Indian communities globally.",
        url: "https://timesofindia.indiatimes.com/etimes/trending/countries-that-celebrate-diwali-just-like-india/photostory/105153045.cms",
        imageUrl: '/diwali_gif.webp'
      },
      {
        title: "Enduring essence of Indian classical dance: A mix of sadhana & spirituality",
        description: "Exploring the connection between classical dance, spirituality, and sadhana.",
        url: "https://www.business-standard.com/lifestyle/enduring-essence-of-indian-classical-dance-a-mix-of-sadhana-spirituality-124081500254_1.html",
        imageUrl: '/dance.webp'
      },
      {
        title: "Yoga is India's biggest gift to world",
        description: "A look at how Diwali is celebrated by Indian communities globally.",
        url: "https://economictimes.indiatimes.com/news/india/yoga-is-indias-biggest-gift-to-world-amit-shah/articleshow/111162619.cms?from=mdr",
        imageUrl: '/yoga.webp'
      }
    ];


    const start = (page - 1) * props.pageSize;
    const paginatedSchemes = schemesData.slice(start, start + props.pageSize);


    setSchemes(schemesData); // Store all schemes for reference
    setFilteredSchemes(paginatedSchemes); // Initialize with all schemes
    setTotalResults(schemesData.length);
  };


  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredSchemes(schemes.slice(0, props.pageSize)); // Reset to the paginated list if search is empty
      return;
    }
 
    const filtered = schemes.filter((scheme) => {
      // Convert tags and image tags to lowercase for case-insensitive search
      const schemeTags = (tagsDictionary[scheme.title] || []).map(tag => tag.toLowerCase());
      const imageTags = (imageTagsDictionary[scheme.imageUrl] || []).map(tag => tag.toLowerCase());
 
      // Combine all tags for comparison
      const combinedTags = [...schemeTags, ...imageTags];
 
      // Search should match any tag or part of title/description
      return combinedTags.some(tag => tag.includes(searchTerm.toLowerCase())) ||
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (scheme.description && scheme.description.toLowerCase().includes(searchTerm.toLowerCase()));
    });
 
    setFilteredSchemes(filtered.slice(0, props.pageSize)); // Only show filtered schemes up to the page size
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
     
      {/* Search Bar */}
      <div className="search-bar-container text-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search by tag or image tag (e.g., culture, diwali, yoga)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key press
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>Search</button>
      </div>


      {/* Display filtered schemes */}
      <div className="row">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <div className="col-md-4 my-2" key={scheme.url}>
              <SchemesItem
                title={scheme.title}
                description={scheme.description}
                imageUrl={scheme.imageUrl}
                url={scheme.url}
              />
            </div>
          ))
        ) : (
          <div className="text-center mt-3">
            <p>No schemes found matching the search criteria.</p>
          </div>
        )}
      </div>


      {/* Pagination Controls */}
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


