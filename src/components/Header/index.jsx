/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./Header.scss"

import React, { useState } from "react"

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (scrollY >= 80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")
  })

  const [toggle, setToggle] = useState(false)
  const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          T.D.
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-home nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skilss" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#myproject"
                onClick={() => setActiveNav("#myprojects")}
                className={activeNav === "#myprojects" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase nav__icon" />
                My Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-image nav__icon" />
                Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon" />
                Contact
              </a>
            </li>
          </ul>

          <i className="bx bx-x nav__close" onClick={() => setToggle(!toggle)} />
        </div>
        <div role="button" className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-grid" />
        </div>
      </nav>
    </header>
  )
}

export default Header
