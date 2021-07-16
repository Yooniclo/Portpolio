import React, { useEffect } from 'react'
import { Link } from 'gatsby'
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
  height: 450px;
  justify-content: center;
  align-items: center;
  
`
const Works = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 10px;

`
const TitleMessage = styled.h1`
  color: #fbfbfb;
`
const ProjectWrapper = styled.div`
  display: flex;
`
const ProjectBox = styled.div`
  width: 300px;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 180px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 10px;
`
const ProjectMessge = styled.h6`
  margin: 20px 0px;
`
const Header = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
`
const IndexPage = ({ location }) => {
    return (
    <MainWrapper>
      <title>YJH PP</title>
      <ContentsWrapper>
        <Header>
          <Link to="/">YOON JEONGHYUN PORTPOLIO</Link>
        </Header>
        <Intro>
          <TitleMessage>대전MBC 통계 페이지 개발</TitleMessage>
        </Intro>
        <Works>
          <ProjectWrapper>
            {location.state.data.image}
          </ProjectWrapper>
          <ProjectWrapper>

          </ProjectWrapper>
        </Works>
      </ContentsWrapper>
    </MainWrapper>
  )
}

export default IndexPage
