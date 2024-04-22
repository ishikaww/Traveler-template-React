import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traveler template</title>
        <meta property="og:title" content="Traveler template" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <div className="home-container01">
          <div data-thq="thq-burger-menu" className="home-menu">
            <button className="home-hamburger button">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div className="home-container02"></div>
        </div>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="logo"
            src="/Videos/whatsapp%20image%202024-04-22%20at%2019.35.21-200h.jpeg"
            className="home-image"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <Link to="/" className="home-navlink">
                Home
              </Link>
              <Link to="/clubs" className="home-navlink1">
                Clubs
              </Link>
              <Link to="/announcements" className="home-navlink2">
                Announcements
              </Link>
              <Link to="/apply" className="home-navlink3">
                Apply
              </Link>
              <Link to="/contact-us" className="home-navlink4">
                <span>Contact us</span>
                <br></br>
              </Link>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="home-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-text02">About</span>
                <span className="home-text03">Features</span>
                <span className="home-text04">Pricing</span>
                <span className="home-text05">Team</span>
                <span className="home-text06">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu1">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container03">
              <img alt="logo" src="/logo.svg" className="home-logo1" />
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text07">About</span>
              <span className="home-text08">Features</span>
              <span className="home-text09">Pricing</span>
              <span className="home-text10">Team</span>
              <span className="home-text11">Blog</span>
            </nav>
            <div className="home-container04">
              <button className="home-login2 button">Login</button>
              <button className="button">Register</button>
            </div>
            <span>Text</span>
            <span>Text</span>
            <span>Text</span>
          </div>
          <div className="home-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-container05"></div>
        <div className="home-main">
          <div className="home-video">
            <div className="home-tint">
              <h1 className="home-header">
                <span>Explore your interests.</span>
                <br></br>
                <span>Join a club! </span>
              </h1>
            </div>
          </div>
          <div className="home-content"></div>
        </div>
        <div id="features" className="home-feaures">
          <div className="home-content1"></div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-content2">
          <div className="home-heading"></div>
          <div className="home-details">
            <div className="home-container06">
              <img
                alt="image"
                src="/Avatar/screenshot%202024-04-22%20205603-300h.png"
                className="home-avatar"
              />
              <div className="home-author">
                <span className="home-name">Sir K.V.Vishnu Raju</span>
              </div>
            </div>
            <div className="home-container07">
              <p className="home-quote">
                ““Real change is difficult at the beginning, but gorgeous at the
                end. Change begins the moment you get the courage and step
                outside your comfort zone; change begins at the end of your
                comfort zone.””
              </p>
              <div className="home-controls">
                <div className="home-next page"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-destinations">
        <div className="home-video-details">
          <div className="home-heading1">
            <h2 className="home-header1">
              Our Spotlight
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="home-caption">The events we are proudest of</p>
          </div>
          <div className="home-video-wrapper">
            <div className="home-tint1">
              <img alt="image" src="/Icons/play.svg" className="home-image1" />
            </div>
            <video
              src
              poster="/Avatar/bongubongu-800h.jpg"
              className="home-video1"
            ></video>
          </div>
        </div>
        <p className="home-caption1">
          Athenes 2024 will be conducted from 25th on May and 26th of May. Join
          us for two nights of absolute fun and festivity!!
        </p>
        <div className="home-list">
          <Link to="/" className="home-navlink5">
            <div className="home-location-wrapper"></div>
          </Link>
          <Link to="/" className="home-navlink6">
            <div className="home-location-wrapper1"></div>
          </Link>
          <Link to="/" className="home-navlink7">
            <div className="home-location-wrapper2"></div>
          </Link>
          <Link to="/" className="home-navlink8">
            <div className="home-location-wrapper3"></div>
          </Link>
        </div>
      </section>
      <section id="guides" className="home-guides">
        <div className="home-heading2">
          <h2 className="home-header2">PREVIOUSLY CONDUCTED EVENTS:</h2>
        </div>
        <h1>KALOS HOUR</h1>
        <img
          alt="image"
          src="/img-20240422-wa0029-600w.jpg"
          className="home-image2"
        />
        <h1>SAE BAJA</h1>
        <img
          alt="image"
          src="/img-20240422-wa0031-600w.jpg"
          className="home-image3"
        />
        <h1>FLASH MOB-2023</h1>
        <img
          alt="image"
          src="/img-20240422-wa0030-600w.jpg"
          className="home-image4"
        />
      </section>
      <section className="home-faq">
        <div id="faqs" className="home-content3">
          <div className="home-heading3">
            <h2 className="home-header3">Frequently asked questions</h2>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion home-element"
            >
              <div className="home-content4">
                <span className="home-header4">How to join a club?</span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon20"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon22"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content5"></div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon24"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon26"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="find" className="home-find">
        <div className="home-heading4">
          <h2 className="home-header5">Contact us today</h2>
        </div>
        <button className="home-find1 button">Find a local guide</button>
        <div className="home-container08"></div>
      </section>
      <section className="home-footer">
        <div className="home-content6">
          <div className="home-main1">
            <div className="home-branding">
              <div className="home-heading5">
                <img alt="image" src="/logo.svg" className="home-image5" />
                <p className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="home-links2">
              <div className="home-items">
                <button className="home-link button button-clean">
                  Find a guide
                </button>
                <a
                  href="#destinations"
                  className="home-link01 button button-clean"
                >
                  Find a tour
                </a>
                <a
                  href="#destinations"
                  className="home-link02 button button-clean"
                >
                  Visit a city
                </a>
                <a
                  href="#destinations"
                  className="home-link03 button button-clean"
                >
                  Visit a country
                </a>
              </div>
              <div className="home-items1">
                <button className="home-link04 button button-clean">
                  How it works
                </button>
                <button className="home-link05 button button-clean">
                  Cancelation policy
                </button>
                <button className="home-link06 button button-clean">
                  Local guides
                </button>
                <button className="home-link07 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="home-items2">
                <button className="home-link08 button button-clean">
                  About us
                </button>
                <button className="home-link09 button button-clean">
                  Blog
                </button>
                <button className="home-link10 button button-clean">
                  Partners
                </button>
                <button className="home-link11 button button-clean">
                  Faqs
                </button>
                <button className="home-link12 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <div className="home-container10">
          <Script
            html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
