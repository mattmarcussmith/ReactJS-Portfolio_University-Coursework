import React from "react";

const Socials = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/mattmarcussmith/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/mattmarcussmith"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://leetcode.com/matthewmsmith/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-coffee"></i>
      </a>
    </div>
  );
};

export default Socials;
