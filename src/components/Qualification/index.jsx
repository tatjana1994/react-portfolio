import "./Qualification.scss"

import React, { useState } from "react"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }
  return (
    <section className="qualification section" id="qualification">
      <h1 className="section__title">Qualification</h1>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            role="button"
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            role="button"
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>
        </div>
        {/* EDUCATION  */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Master Degree of Business Informatics specialist
                </h3>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2019 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>

            <div className="qualification__data">
              <div />

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Business Informatics specialist</h3>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2015 - 2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High school of economics</h3>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2009 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
          </div>

          {/* WORK */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Forga</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> March 2023 - October 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            <div className="qualification__data">
              <div />

              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">React/React Native Developer</h3>
                <span className="qualification__subtitle">Kortechs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2019 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
