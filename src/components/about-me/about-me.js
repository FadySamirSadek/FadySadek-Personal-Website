import React from "react"
import styled from "@emotion/styled"

import fadysadek from "./fadysadek.svg"
import cursor from "./cursor.png"

const ProfilePicture = styled.img`
  width: 100px;
  border-radius: 50%;
`
const ProfileContainer = styled.div`
  text-align: center;
`
class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      mouseOnPP: "hidden",
    }
  }

  render() {
    return (
      <ProfileContainer>
        <p style={{ visibility: this.state.mouseOnPP }}>
          Get your <img src={cursor} /> off my face
        </p>
        <ProfilePicture
          src={fadysadek}
          onMouseOver={() => this.setState({ mouseOnPP: "visible" })}
          onMouseOut={() => this.setState({ mouseOnPP: "hidden" })}
        />
      </ProfileContainer>
    )
  }
}

export default AboutMe
