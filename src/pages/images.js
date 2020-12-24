import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project1 from "../images/project-3.jpg"
import Project2 from "../images/project-2.jpg"
import Project3 from "../images/project-3.jpg"


const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
flex: 1 0 33.33%;
width:500px;
height:200px;
margin-left:10px;
margin-right:10px;
`

const Images = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 style={{
          textAlign: `center`,
         
        }}>PROJECTS</h1>
<Container >
  <Image src={Project1} />
  
  <Image src={Project2} />
  
  <Image src={Project3} />
</Container>
   
  </Layout>
)

export default Images
