import React, { useState } from "react";
import "./navbar.scss";
import { Link, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const [activeLink, setActiveLink] = useState(history.location.pathname);

  const routes = [
    { title: "Home", to: "/" },
    { title: "Favorites", to: "/favorites" },
  ];

  return (
    <nav className="nav">
      <span className="nav-logo">PexelApp</span>
      <ul className="nav-menu">
        {routes.map((route) => {
          return (
            <li key={route.title}>
              <Link
                to={route.to}
                className={`nav-link ${activeLink === route.to && "active"}`}
                onClick={() => setActiveLink(route.to)}
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
