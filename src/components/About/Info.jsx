import React from "react"

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 months Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3 + Projects</span>
      </div>
    </div>
  )
}

export default Info
