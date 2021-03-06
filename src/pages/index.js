import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
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
const IndexPage = () => {
  return (
    <MainWrapper>
      <title>Home Page</title>
      <ContentsWrapper>
        <Header>
          {/* <a href="#" onClick={ () => navigate('/tjmbc', { state: { foo: 'bar' } } ) }>Forgot Password?</a> */}
          <Link to="/">YOON JEONGHYON PORTPOLIO</Link>
        </Header>
        <Intro>
          <TitleMessage>Code Simply, Work Flexibility</TitleMessage>
        </Intro>
        <Works>
          <ProjectMessge>진행 프로젝트</ProjectMessge>
          <ProjectWrapper>
            {projects.work.map((v, i) => (
              <Link to={v.keyword} state={{ data: v }} key={i}>
                <ProjectBox>
                  {v.title}
                </ProjectBox>
              </Link>
            ))}
          </ProjectWrapper>
          <ProjectMessge>토이 프로젝트</ProjectMessge>
          <ProjectWrapper>
            {projects.toy.map((v, i) => (
              <Link to={v.keyword} key={i}>
                <ProjectBox>
                  {v.title}
                </ProjectBox>
              </Link>
            ))}
          </ProjectWrapper>
        </Works>
      </ContentsWrapper>
    </MainWrapper>
  )
}

export default IndexPage
