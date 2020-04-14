import React from "react"
import PropTypes from "prop-types"
import "./Banner.scss"
import { FacebookButton, Button, Icon } from "@components"

const Banner = ({ heading, description }) => {
  return (
    <>
      <div className="banner__bg" />
      <div className="banner__scroll-down-bg" />
      <div className="banner__shape-wrapper">
        <Icon className="banner__shape" type="bgShape" />
      </div>
      <section className="banner section">
        {/* <Icon className="banner__logo" type="logo" /> */}
        <div className="banner__logo-text">
          <div className="banner__logo-title">
            Maska <br />
            polka.pl
          </div>
          <div className="banner__logo-description">Akcja prospołeczna</div>
        </div>
        {/* <Hamburger
        className="banner__hamburger"
        open={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      /> */}
        <div className="banner__heading">
          <h1 className="heading-primary">{heading}</h1>
          <p className="banner__paragraph">{description}</p>
        </div>
        <div className="banner__buttons">
          <Button color="red">
            <Icon className="banner__icon" type="pin" round />
            Znajdź punkt
          </Button>
          <Button color="white">
            <Icon className="banner__icon" type="plus" round />
            Dodaj punkt
          </Button>
        </div>
        <div className="banner__scroll-down">
          <Icon className="banner__scroll-down-icon" type="arrow" round />
          Zjedź w dół i dowiedz się więcej o akcji Maska Polka
        </div>
        <Icon className="banner__illustration" type="iluStart" />
        <FacebookButton
          className="banner__fb-btn"
          text="Dołącz do akcji"
          link="#"
        />
      </section>
    </>
  )
}

Banner.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default React.memo(Banner)