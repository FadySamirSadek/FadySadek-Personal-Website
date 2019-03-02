import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const NavBar = styled.nav`
  font-size: 16px;
  color: white;
  float: right;
  line-height: 45px;
`
const NavElement = styled.span`
  margin-left: 12px;

  a {
    :hover,
    :visited,
    :link,
    :active {
      text-decoration: none;
      color: white;
    }
  }
`
const Nav = () => (
  <NavBar>
    <NavElement>
      <Link to="#">BLOG</Link>
    </NavElement>
    <NavElement>
      <Link to="#">OPEN SOURCE</Link>
    </NavElement>
    <NavElement>
      <Link to="#">HIRE ME</Link>
    </NavElement>
    <NavElement>
      <Link to="#">CONTACT</Link>
    </NavElement>
  </NavBar>
)

export default Nav
