import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const socialIcons = [
    { name: "facebook", iconClass: "fab fa-facebook-square" },
    { name: "instagram", iconClass: "fab fa-instagram-square" },
    { name: "pinterest", iconClass: "fab fa-pinterest-square" },
    { name: "twitter", iconClass: "fab fa-twitter-square" },
  ];

  const topListItems = [
    { name: "Home", slug: "/" },
    {
      name: "News",
      slug: "/news",
      dropdown: [
        { name: "Technology", slug: "technology" },
        { name: "Science", slug: "science" },
        { name: "Entertainment", slug: "entertainment" },
        { name: "Sports", slug: "sports" },
        { name: "Business", slug: "business" },
      ],
    },
    { name: "Schemes", slug: "/scheme" },
    { name: "Scholarships", slug: "/scholarship" },
    { name: "Contact", slug: "/contact" },
    { name: "About", slug: "/about" },
  ];

  const navigate = useNavigate();

  const handleCategorySelect = (slug) => {
    navigate(`/news?category=${slug}`);
  };

  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="iconsAlign1">
          <pre>{currentDate} {currentTime}</pre>
        </div>
        <h1
          style={{
            fontFamily: "Comic Sans MS, cursive, sans-serif",
            fontSize: "3rem",
            fontWeight: "bold",
            marginRight: "40px"
          }}
        >
          Jan Connect
        </h1>
        <div className="iconsAlign">
          <button className="logoutbtn">LogOut</button>
          {socialIcons.map((icon, index) => (
            <i key={index} className={`topbarIcon ${icon.iconClass}`}></i>
          ))}
        </div>
      </div>

      <hr />

      <div className="topbarCenter">
        <ul className="topbarList" style={{ marginBottom: "15px" }}>
          {topListItems.map((item, index) => (
            <li
              key={index}
              className="topbarListItem"
              onMouseEnter={() => setDropdownVisible(item.name === "News")}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <NavLink
                to={item.slug}
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                {item.name}
                {item.name === "News" && (
                  <i className={`arrow ${dropdownVisible ? "rotate" : ""}`}></i>
                )}
              </NavLink>

              {item.name === "News" && dropdownVisible && (
                <ul className="dropdown">
                  {item.dropdown.map((dropdownItem, idx) => (
                    <li key={idx} className="dropdownItem">
                      <button
                        onClick={() => handleCategorySelect(dropdownItem.slug)}
                        className="link"
                      >
                        {dropdownItem.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
