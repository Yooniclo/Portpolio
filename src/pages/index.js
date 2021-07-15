import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import '../global.css'

const MainWrapper = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  background: #ededed;
`
const ContentsWrapper = styled.div`
  display: flex;
  width: 65vw;
  flex-direction: column;
  background: #dbdbdb;
  @media only screen and (max-width: 1024px) {
    width: 100vw;
  }
`
const Intro = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  
`
const Works = styled.div`
  display: flex;
  height: 400px;
  padding: 10px;

`
const TitleMessage = styled.h1`
  color: #fbfbfb;
`
// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }
]

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <MainWrapper>
      <title>Home Page</title>
      <ContentsWrapper>
        <Intro>
          <TitleMessage>Code Simply, Work Flexibility</TitleMessage>
        </Intro>
        <Works>
          <p>진행 프로젝트</p>
          {data.site.siteMetadata.title}
        </Works>
      </ContentsWrapper>
    </MainWrapper>
  )
}

export default IndexPage
