import React from 'react'

import { Helmet } from 'react-helmet'

import './announcements.css'

const Announcements = (props) => {
  return (
    <div className="announcements-container">
      <Helmet>
        <title>Announcements - Traveler template</title>
        <meta property="og:title" content="Announcements - Traveler template" />
      </Helmet>
      <div className="announcements-container01">
        <div className="announcements-container02">
          <div className="announcements-container03"></div>
          <div className="announcements-container04">
            <h1 className="Heading">Announcements</h1>
          </div>
          <div className="announcements-container05">
            <span className="announcements-text01">
              Never miss another opportunity by subscribing to our weekly mail
              blast
            </span>
          </div>
          <div className="announcements-container06">
            <button type="button" className="button">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="announcements-container07">
        <div className="announcements-highlight">
          <div className="announcements-image">
            <img
              alt="image"
              src="/img-20240422-wa0019-500h.jpg"
              className="announcements-image1"
            />
          </div>
          <div className="announcements-content">
            <div className="announcements-heading">
              <h2 className="announcements-header">BLOOD DONATION CAMP</h2>
              <p className="announcements-caption">
                <span>
                  BVRIT-NSS (national service scheme),is organizing blood
                  donation camp on 2nd of May 2024,interested members can
                  register. 
                </span>
                <br></br>
                <span>location:Auditorium</span>
                <br></br>
                <span>time:9:30am-1:00pm</span>
                <br></br>
                <span>
                  students are requested to have a meal before coming.
                </span>
                <br></br>
                <br></br>
                <br></br>
              </p>
            </div>
            <a
              href="https://www.iete.org/membership.html"
              target="_blank"
              rel="noreferrer noopener"
              className="announcements-find button"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="announcements-container08">
        <div className="announcements-container09">
          <div className="announcements-highlight1">
            <div className="announcements-image2">
              <img
                alt="image"
                src="/img-20240422-wa0016-500w.jpg"
                className="announcements-image3"
              />
            </div>
            <div className="announcements-content1">
              <div className="announcements-heading1">
                <h2 className="announcements-header1">TECHSURGE</h2>
                <p className="announcements-caption1">
                  <span className="announcements-text12">
                    CODING BRIGADE BVRIT , is organizing a event called
                    techsurge.Interested members can participate.
                  </span>
                  <br></br>
                  <span>location:BVRITN Auditorium</span>
                  <br></br>
                  <span>Registration deadline:14th April 2024</span>
                  <br></br>
                  <span>Events:</span>
                  <br></br>
                  <span>1.YUKHTI</span>
                  <br></br>
                  <span>2.PRASTUTHI</span>
                  <br></br>
                  <span>3.SAARADDHI</span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <a
                href="https://www.iete.org/membership.html"
                target="_blank"
                rel="noreferrer noopener"
                className="announcements-find1 button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements
