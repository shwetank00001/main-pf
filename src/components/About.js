import React from 'react'
import styled from "styled-components";
import TextBall from './TextBall';




const About = () => {
  
    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `


      const Container = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      width: 1400px;
      display: flex;
      justify-content: space-between;
      z-index : 999;
      `
      const Left = styled.div`
      flex: 1;

      @media only screen and (max-width: 768px) {
        display: none;
    }
      `


      const Right = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
    `
      
      const Title = styled.h1`
      color: #aa76f5;
      font-size: 50px;

      @media only screen and (max-width: 768px) {
        font-size: 30px;
        }
       `


      const Desc = styled.p`
      font-size: 19px;

      @media only screen and (max-width: 768px) {
        font-size: 16px;
        width: 350px;
      }
      `


  return (
    <Section>
          <Container>
            <Left>
            <TextBall/>
              {/* <Canvas camera={{fov:25 ,position:[8,8,8]}}>
                  <OrbitControls enableZoom={false} autoRotate={true}/>
                  <ambientLight intensity={1} />
                  <directionalLight position={[3,2,1]} />
                  <Model />
              </Canvas> */}
            </Left>


            <Right>
                <Title>About Me and Work history</Title>
                <Desc>Hello, I'm Shwetank, and I'm dedicated to pursuing a career as a Fullstack Developer. I hold a degree from Galgotias University and have gained valuable experience during my tenure at HCL Technologies, where I worked as a SQL Developer. Driven by my passion for Fullstack Development, I made a deliberate choice to transition to various startups. This decision was motivated by my desire to not only augment my skill set but also to immerse myself in diverse work environments and cultures.
                  I am committed to continuous learning and growth, and I'm excited about the opportunities and challenges that the world of Fullstack Development offers. I look forward to contributing my expertise and collaborating with like-minded professionals to create impactful solutions in the field.
                </Desc> 
                <Title>My Skills</Title>
                <Desc>
                  My main tech skills are- Mongo,Express, reactJs, nodeJs,Python, C++, SQL, API Development and integration.
                </Desc>  
                <Title>My Hobbies</Title>
                <Desc>
                  I love to go to the gym, trade, play games and sports and also I love to learn about new coding ideologies.
                </Desc>  
            </Right>
          </Container>
    </Section>
  )
}

export default About