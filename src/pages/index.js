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
  height: 500px;
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
  margin: 0px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 150px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 10px;
`
const ProjectMessge = styled.h6`
  margin: 20px 0px;
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
          <ProjectMessge>진행 프로젝트</ProjectMessge>
          <ProjectWrapper>
            {projects.work.map((v, i) => (
              <ProjectBox key={i}>
                {v.title}
              </ProjectBox>
            ))}
          </ProjectWrapper>
          <ProjectMessge>토이 프로젝트</ProjectMessge>
          <ProjectWrapper>
            {projects.toy.map((v, i) => (
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
