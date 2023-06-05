import React from 'react'
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Model from './Model'
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

      `
      const Left = styled.div`
      flex: 1;
      `


      const Right = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;`
      
      const Title = styled.h1`
      color: #da4ea2;
      font-size: 50px; `


      const Desc = styled.p`
      font-size: 19px;
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
                <Desc>Hi, all I'm Shwetank and I am aiming to be a Fullstack Developer. I have graduated from Galgotias University and
                 I was employed at HCL Tech as a SQL Dev. I always had a good interest in Fullstack Development so I left HCL and started working for different startups.
                 To enhance my skills and also, I wanted to experience different work cultures.
                </Desc> 
                <Title>My Skills</Title>
                <Desc>
                  My main tech skills are- Mongo,Express, reactJs, nodeJs,Python, C++, SQL, API Development and integration.
                </Desc>  
                <Title>My Hobbies</Title>
                <Desc>
                  I love to go to Gym, Trade, Play games and also learn new coding ideologies
                </Desc>  
            </Right>
          </Container>
    </Section>
  )
}

export default About