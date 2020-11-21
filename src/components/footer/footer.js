import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <span className="">Made by Anton Shlykov</span>
      <a className="github" href="https://github.com/PermanentAS">
        GitHub <i className="fab fa-github"></i>
      </a>
    </footer>
  );
};
