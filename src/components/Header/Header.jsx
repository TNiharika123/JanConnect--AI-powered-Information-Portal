// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "/src/App.css";
// function Header() {
//   const authStatus = useSelector((state) => state.auth.authStatus);

//   const navItems = [
//     { name: "Home", slug: "/", active: true },
//     { name: "About", slug: "/about", active: !authStatus },
//     { name: "Contact", slug: "/contact", active: !authStatus },
//     { name: "Login", slug: "/login", active: !authStatus },
//     { name: "Community", slug: "/community" },
//     { name: "Tasks", slug: "/tasks", active: authStatus },
//     { name: "Scanner", slug: "/scanner", active: authStatus },
//   ];

//   const recommendationLinkStyle = {
//     textDecoration: 'none',
//     color: 'white',
//     margin: '2px',
//     backgroundColor: 'rgba(40, 167, 69, 0.1)',
//     transition: 'color 0.4s ease',
//   };

//   const recommendationLinkHoverStyle = {
//     color: 'green',
//   };

//   return (
//     <header className="navbar">
//       <div className="container">
//         <div className="nav-items">
//           {navItems?.map(
//             (item, index) =>
//               item.active && (
//                 <NavLink
//                   to={item.slug}
//                   key={index}
//                   className={({ isActive }) =>
//                     `nav-link ${isActive ? "active" : ""}`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               )
//           )}
//           {authStatus && (
//             <a
//               href="http://127.0.0.1:5000/recommend?user_id=1"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={recommendationLinkStyle}
//               onMouseOver={(e) => Object.assign(e.target.style, recommendationLinkHoverStyle)}
//               onMouseOut={(e) => Object.assign(e.target.style, recommendationLinkStyle)}
//             >
//               Resource Recommendation
//             </a>
//           )}
//           {authStatus && <LogoutBtn />}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { NavLink } from "react-router-dom";
import "./Header.css";


function Header() {
  const user = true;

  const socialIcons = [
    { name: "facebook", iconClass: "fab fa-facebook-square" },
    { name: "instagram", iconClass: "fab fa-instagram-square" },
    { name: "pinterest", iconClass: "fab fa-pinterest-square" },
    { name: "twitter", iconClass: "fab fa-twitter-square" },
  ];

  const topListItems = [
    { name: "Home", slug: "/" },
    { name: "LatestNews", slug: "/about" },
    { name: "India", slug: "/contact" },
    { name: "World", slug: "/write" },
    { name: "Sports", slug: "/write" },
    { name: "Business", slug: "/write" },
    { name: "Technology", slug: "/write" },
    { name: "More", slug: "/logout", condition: user },
    { name: "About", slug: "/write" },
    { name: "Contact", slug: "/write" },
  ];

  return (
    <div className="topbar">
       
      <div className="topbarLeft">
        {socialIcons.map((icon, index) => (
          <i key={index} className={`topbarIcon ${icon.iconClass}`}></i>
        ))}
      </div>
   
      <div className="topbarCenter">
        <ul className="topbarList">
          {topListItems.map(
            (item, index) =>
              (item.condition === undefined || item.condition) && (
                <li key={index} className="topbarListItem">
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `link ${isActive ? "active" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="topbarRight">
        {user ? (
          <NavLink className="link" to="/settings">
            <img
              className="topbarImg"
              src="/user.jpg"
              alt="User"
            />
          </NavLink>
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <NavLink className="link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topbarListItem">
              <NavLink className="link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}
        <i className="topbarSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
export default Header;