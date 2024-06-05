import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">MS</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#Testimonials" className="footer__link">Testimonials</a>
          </li>
        </ul>
        <div className="footer__socials">
        <a
        href="https://www.linkedin.com/in/mattmarcussmith/"
        className="footer__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/mattmarcussmith"
        className="footer__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
  
        </div>
      </div>
      <span className="footer__copy">&#169; Matthew Smith. All rights reserved</span>
    </section>
  )
}

export default Footer