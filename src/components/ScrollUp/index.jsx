/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./ScrollUp.scss"

import React from "react"

const ScrollUp = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup")
    if (scrollY >= 560) scrollUp.classList.add("show-scroll")
    else scrollUp.classList.remove("show-scroll")
  })
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon" />
    </a>
  )
}

export default ScrollUp
