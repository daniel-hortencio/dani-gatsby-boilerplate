import React from "react"
import PropTypes from "prop-types"

import Logo from '../Logo'
import Menu from '../Menu'
import SocialMedia from '../SocialMedia'

import './styles.scss'

const Header = ({ siteTitle }) => (
  <>
  <header>
      <div className="container">
        <Logo />        
        <Menu />
        <SocialMedia />
      </div>
  </header>
  <div className="whitespace"/>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
