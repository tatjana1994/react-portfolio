/* eslint-disable jsx-a11y/control-has-associated-label */
import "./Services.scss"

import React from "react"

import ems from "../../assets/EMS.svg"
import herz from "../../assets/HERZ.svg"
import marvel from "../../assets/Marrvel.svg"
import moonsama from "../../assets/MOONSAMA.svg"
import union from "../../assets/Union.svg"

const Services = () => {
  return (
    <section className="services section" id="myprojects">
      <h1 className="section__title">My Projects</h1>
      <span className="section__subtitle">Portfolio Applications</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div className="test">
            <img className="icon" src={marvel} alt="" />
          </div>
          <a
            className="services__button"
            href="https://www.marrvel.ai/"
            target="_blank"
            rel="noreferrer"
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
          </a>
        </div>

        <div className="services__content">
          <div className="test">
            <img src={ems} alt="" />
          </div>

          <a
            className="services__button"
            href="https://www.exclusivemedsupply.com/"
            target="_blank"
            rel="noreferrer"
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
          </a>
        </div>

        <div className="services__content">
          <div className="test">
            <img src={union} alt="" />
          </div>

          <a
            href="https://www.unionfintech.com/"
            target="_blank"
            rel="noreferrer"
            className="services__button"
            role="button"
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
          </a>
        </div>

        <div className="services__content">
          <div className="test">
            <img className="icon" src={herz} alt="" />
          </div>
          <a
            className="services__button"
            href="https://www.herz.rs/"
            target="_blank"
            rel="noreferrer"
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
          </a>
        </div>

        <div className="services__content">
          <div className="test">
            <img className="icon" src={moonsama} alt="" />
          </div>
          <a
            className="services__button"
            href="https://moonsama.com/"
            target="_blank"
            rel="noreferrer"
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
          </a>
        </div>

        <div className="services__content">
          <div className="test">
            <svg viewBox="0 0 160 37" focusable="false" className="chakra-icon css-cs1o8f">
              <g clipPath="url(#clip0_612_15869)">
                <path
                  d="M131.78 8.99067H136.816V4.44182H131.78V8.99067ZM150.707 36.0162C155.922 36.0162 160 34.1967 160 29.3267C160 25.6074 157.687 23.8815 153.157 22.0619L150.119 20.9515C147.847 20.1086 146.355 19.2657 146.355 17.8074C146.355 16.7906 147.313 15.6802 150.119 15.6802C152.651 15.6802 155.374 16.5632 158.371 18.1553V13.9141C156.1 12.4558 153.157 11.6531 150.119 11.6531C146.451 11.6531 141.593 13.4191 141.593 18.3024C141.593 22.2492 144.494 23.8815 148.436 25.2595L151.884 26.4502C153.965 27.1593 155.059 27.8684 155.059 29.4204C155.059 30.9723 153.978 31.8152 150.885 31.8152C147.71 31.8152 144.494 30.7984 141.511 29.1127V33.9023C144.275 35.2268 147.628 36.0162 150.707 36.0162ZM131.835 35.5346H136.721V12.1882H131.821L131.835 35.5346ZM121.721 35.5346H126.566V4.44182H121.721V35.5346ZM111.566 35.5346H116.37V4.42844H111.566V35.5346ZM89.5458 21.4866C90.1343 18.2088 92.803 15.6802 96.4297 15.6802C99.9196 15.6802 102.862 17.8074 102.862 21.4866H89.5458ZM97.2509 36.0563C100.371 36.0563 103.409 34.9057 105.681 33.22V28.524C103.013 30.3435 100.33 31.6279 97.6615 31.6279C93.0357 31.6279 90.0522 29.4605 89.4637 25.4736H107.228C107.365 24.7243 107.406 23.9617 107.406 23.2527C107.406 15.8541 102.917 11.6397 96.3476 11.6397C89.6416 11.6397 84.6053 16.7772 84.6053 23.828C84.6053 30.9723 89.7648 36.0563 97.2509 36.0563ZM71.4533 35.5346L85.2348 12.1882H79.7468L71.4943 26.8115L63.1186 12.1882H57.6307L71.4533 35.5346ZM36.7599 35.5346H42.0563L51.212 20.0685L48.5844 15.5464L36.7599 35.5346ZM18.3936 35.5346H23.649L7.15764 7.74643L4.62578 12.1882L18.3936 35.5346ZM9.19682 35.5346H14.4521L2.62766 15.5464L0 20.0685L9.19682 35.5346ZM27.5494 35.5346H32.8047L46.6273 12.1882L43.9997 7.75981L30.1771 31.1061L28.1926 27.7748L42.0563 4.42844L39.3876 0L25.606 23.3865L11.8245 0L9.19682 4.42844L27.5494 35.5346Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
          <a
            className="services__button"
            href="https://www.vellis.financial/"
            target="_blank"
            rel="noreferrer"
          >
            View More <i className="uil uil-arrow-right services__button-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
