import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './apply.css'

const Apply = (props) => {
  return (
    <div className="apply-container">
      <Helmet>
        <title>Apply - Traveler template</title>
        <meta property="og:title" content="Apply - Traveler template" />
      </Helmet>
      <div className="apply-container1">
        <Link to="/" className="apply-navlink">
          <svg viewBox="0 0 1024 1024" className="apply-icon">
            <path d="M896 470v84h-604l152 154-60 60-256-256 256-256 60 60-152 154h604z"></path>
          </svg>
        </Link>
        <span className="apply-text">                      Apply Now! </span>
      </div>
      <div className="apply-container2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGp1c3QlMjBkbyUyMGl0fGVufDB8fHx8MTcxMzc5OTExOXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="apply-image"
        />
      </div>
      <div className="apply-container3">
        <span className="apply-text1">
          <br></br>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Apply
