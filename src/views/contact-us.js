import React from 'react'

import { Helmet } from 'react-helmet'

import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-us - Traveler template</title>
        <meta property="og:title" content="Contact-us - Traveler template" />
      </Helmet>
    </div>
  )
}

export default ContactUs
