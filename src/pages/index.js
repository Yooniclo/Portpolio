import React, { useEffect } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import '../global.css'
import { projects } from '../projects'

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
  flex-direction: column;
  height: 400px;
  padding: 10px;

`
const TitleMessage = styled.h1`
  color: #fbfbfb;
`
const ProjectWrapper = styled.div`
  display: flex;
`
const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`


const IndexPage = () => {
  return (
    <MainWrapper>
      <title>Home Page</title>
      <ContentsWrapper>
        <Intro>
          <TitleMessage>Code Simply, Work Flexibility</TitleMessage>
        </Intro>
        <Works>
          <h6>진행 프로젝트</h6>
          <ProjectWrapper>
            {projects.map((v, i) => (
              <ProjectBox key={i}>
                {v.title}
              </ProjectBox>
            ))}
          </ProjectWrapper>
        </Works>
      </ContentsWrapper>
    </MainWrapper>
  )
}

export default IndexPage
