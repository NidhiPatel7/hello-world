import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Avtar1 from "../images/avtar-1.png"
import Avtar2 from "../images/Avatar-2.jpg"
//import header from "../components/header"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  text-align:left;
`

const Excerpt = styled.p`
  margin-bottom: 10px;
  text-align:left;
`
// const Button = styled.a`
//   padding: 10px 10px;
//   background:black;
//   color:white;
//   text-decoration:none;
// `

// const Link = styled(Link)
// `background:black;
// `

const User = props => (
 
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
      {/* <Button>{props.button}</Button> */}
      <Link to="/images"   style={{
          background: `black`,
          color: 'white',
          padding:'10px 10px',
          textAlign:'left',
        }}>Projects</Link>
    </Description>
  </UserWrapper>
)

export default function UsersList() {
  return (
    <Layout>

    <Container>
      <h1>OUR USERS</h1>
      <User
      style={{
        textAlign: `left`,
       
      }}
        username="Amanda"
        avatar={Avtar1}
        excerpt="I'm Amanda. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        button="Read More"
      />
      <User
        username="Georgie"
        avatar={Avtar2}
        excerpt="I'm Georgie, Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        button="Read More"
      />
    </Container>
    </Layout>

  )
}