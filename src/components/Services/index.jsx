/* eslint-disable jsx-a11y/control-has-associated-label */
import "./Services.scss"

import React, { useRef, useState } from "react"

import useOnClickOutside from "../../utils/hooks"

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = index => {
    setToggleState(index)
  }

  const handleOutsideClick = modalIndex => {
    if (modalIndex === toggleState) {
      setToggleState(0)
    }
  }

  const modal1Ref = useRef()
  useOnClickOutside(modal1Ref, () => handleOutsideClick(1))

  const modal2Ref = useRef()
  useOnClickOutside(modal2Ref, () => handleOutsideClick(2))

  const modal3Ref = useRef()
  useOnClickOutside(modal3Ref, () => handleOutsideClick(3))

  return (
    <section className="services section" id="services">
      <h1 className="section__title">My Projects</h1>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon" />
            <h3 className="services__title">
              Statisctics <br /> App
            </h3>
          </div>

          <span
            role="button"
            className="services__button"
            onClick={() => {
              toggleTab(1)
            }}
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
            <div
              className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}
              role="button"
              onClick={e => e.stopPropagation()}
            >
              <div role="button" className="services__modal-content" ref={modal1Ref}>
                <i
                  role="button"
                  onClick={() => {
                    toggleTab(0)
                  }}
                  className="uil uil-times services__modal-close"
                />

                <h3 className="services__modal-title">Statistics App</h3>
                <p className="services__modal-description">
                  This app was made with react, redux and firebase. It uses graphs to display
                  various statistics within a company, their employees, earnings and products. I
                  have also implemented search and sorting. The app uses firebase collection as a
                  database. It was only made as an example of my skills, hence everything within the
                  app may not have perfect sense.
                  <br />
                  <br />
                  <p>You will need these credentials to log in</p>
                  <br />
                  <p>Email: test.statistics.app@gmail.com</p>
                  <p>Password: test11</p>
                  <br />
                  <a rel="noreferrer" target="_blank" href="https://statistics-app.netlify.app/">
                    Click here to open Statistics App
                  </a>
                </p>
              </div>
            </div>
          </span>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon" />
            <h3 className="services__title">
              Cocktails <br /> App
            </h3>
          </div>

          <span
            role="button"
            className="services__button"
            onClick={() => {
              toggleTab(2)
            }}
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
            <div
              className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}
              role="button"
              onClick={e => e.stopPropagation()}
            >
              <div className="services__modal-content" ref={modal2Ref}>
                <i
                  className="uil uil-times services__modal-close"
                  role="button"
                  onClick={() => {
                    toggleTab(0)
                  }}
                />

                <h3 className="services__modal-title"> Cocktails App</h3>
                <p className="services__modal-description">
                  This app was made in react and I used a free Rest API just to show that I can work
                  with it as well. It has an option to search for a specific cocktail and view its
                  details.
                </p>
              </div>
            </div>
          </span>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bxl-react services__icon" />
            <h3 className="services__title">
              Marlboro <br /> Quiz App
            </h3>
          </div>

          <span
            className="services__button"
            role="button"
            onClick={() => {
              toggleTab(3)
            }}
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
            <div
              className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}
              role="button"
              onClick={e => e.stopPropagation()}
            >
              <div className="services__modal-content" ref={modal3Ref}>
                <i
                  className="uil uil-times services__modal-close"
                  role="button"
                  onClick={() => {
                    toggleTab(0)
                  }}
                />

                <h3 className="services__modal-title">Marlboro Quiz App</h3>
                <p className="services__modal-description">
                  This app was made with react-native, it works on web, iOS and android platforms,
                  though this example is deployed on Netlify so only the web version can be viewed,
                  but with the source code you could run it on mobile platforms. The quiz has 5
                  questions of which you have to answer at least 4 correctly in order to pass the
                  test. The order of questions and answers is randomised each time in order to make
                  it a bit more difficult. It does not use any sort of database so everything is
                  stored on the frontend.
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Services
