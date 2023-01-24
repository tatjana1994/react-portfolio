import "./Footer.scss"

import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Devrnja</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook" />
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram" />
          </a>

          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter" />
          </a>
        </div>

        <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer
