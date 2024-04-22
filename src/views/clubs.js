import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './clubs.css'

const Clubs = (props) => {
  return (
    <div className="clubs-container">
      <Helmet>
        <title>Clubs - Traveler template</title>
        <meta property="og:title" content="Clubs - Traveler template" />
      </Helmet>
      <div className="clubs-container1">
        <div className="clubs-container2">
          <div className="clubs-container3">
            <h1 className="clubs-text">
              Explore all the clubs we have to offer!
            </h1>
            <span>
              <span>
                Build your own community today and interact with your peers.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="clubs-container4">
        <div className="clubs-heading">
          <h2 className="clubs-header">
            <span>Meet the newest additions to our family</span>
            <br></br>
          </h2>
          <p className="clubs-caption">
            Applications are open till the 20th of May .
          </p>
        </div>
      </div>
      <div className="clubs-container5">
        <section id="how-it-works" className="clubs-highlights">
          <div className="clubs-highlight">
            <div className="clubs-content">
              <div className="clubs-heading1">
                <h2 className="clubs-header1">
                  Explore your artistic side with Club Renaissance!
                </h2>
                <p className="clubs-caption1">
                  Club Renaissance was started with the intention of providing
                  the must needed creative outlet that many engineering students
                  need. This club is open to anyone interested in having a good
                  time while making arts and crafts projects and having them
                  displayed in the college, especially during events. Register
                  now!
                </p>
              </div>
              <Link to="/apply" className="clubs-read-more button-arrow button">
                <span className="clubs-text06">Read more</span>
                <span className="clubs-text07">&gt;</span>
              </Link>
            </div>
            <div className="clubs-image">
              <div className="clubs-rectangle"></div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1615339725569-80172615f345?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGNyYWZ0c3xlbnwwfHx8fDE3MTM3OTI0NjF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="clubs-image1"
              />
            </div>
          </div>
          <div className="clubs-highlight1">
            <div className="clubs-image2">
              <img
                alt="image"
                src="/Videos/whatsapp%20image%202024-04-22%20at%2019.10.59-1500w.jpeg"
                className="clubs-image3"
              />
            </div>
            <div className="clubs-content1">
              <div className="clubs-heading2">
                <h2 className="clubs-header2">
                  Institution of Electronics and Telecommunication Engineers -
                  IETE
                </h2>
                <p className="clubs-caption2">
                  <span>
                    IETE is India&apos;s leading recognized professional society
                    devoted to the advancement of science, technology,
                    electronics, telecommunication and information technology.
                    Founded in 1953, it serves more than 70,000+ members through
                    60+ centers/sub centers. Students are now welcome to apply
                    to become a member of this prestigious institution.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
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
                className="clubs-find button"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="clubs-container6"></div>
          <div className="clubs-container7"></div>
        </section>
      </div>
    </div>
  )
}

export default Clubs
