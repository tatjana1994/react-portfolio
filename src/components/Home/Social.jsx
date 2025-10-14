/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react"

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/tatjana-devrnja-6a35001b0/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin-square" />
      </a>

      <a href="mailto:devrnjat94@gmail.com" className="home__social-icon">
        <i className="bx bx-envelope" />
      </a>
    </div>
  )
}

export default Social
