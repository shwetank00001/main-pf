import React from 'react'
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import ParticlesComp from './ParticlesComp';
import {FaGithub} from 'react-icons/fa'



const Hero = () => {



  
    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    `


      const Container = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      width: 1400px;
      display: flex;
      justify-content: space-between;
      z-index : 999;

      @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }   
      `
      const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media only screen and (max-width: 768px) {
      flex: 1;
      align-items: center;
      }
      `
      const Title = styled.h1`
      color: #aa76f5;
      font-size: 50px;
      @media only screen and (max-width: 768px) {
      text-align: center;
      }
      `
      const MySelf = styled.div`
      display: flex;
      align-items: center;
      gap: 10px;

      `
      const Line = styled.img`
      height: 5px;
      `
      const Brief = styled.h3`
      `
      const Desc = styled.p`
      font-size: 24px;
      color: lightgrey;

      @media only screen and (max-width: 768px) {
      text-align: center;
      }
      `
      const Right = styled.div`
      flex: 2;
      position: relative;

      @media only screen and (max-width: 768px) {
      flex: 1;
      }

      `
      const Img = styled.img`
      height: 510px;
      object-fit: contain;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
      }

      animation: animate 2s infinite ease alternate;

      @keyframes animate{
        to{
          transform: translateY(20px);
        }
      }
      `


    const Icon = styled.a`
    font-size:25px;
    color: gray;
    `

  return (
    <Section >
      <ParticlesComp />
          <Container>
            <Left>
              <Title>shwetank.</Title>
              <MySelf>
                <Line src="./img/line.png"/>
                <Brief>FullStack Dev.  </Brief>
                <Icon href='https://github.com/shwetank00001' target="_blank"><FaGithub /></Icon >
              </MySelf>
              <Desc></Desc>

            </Left>


            <Right>
              <Canvas>
                  <OrbitControls enableZoom={false}/>
                  <ambientLight intensity={2} />
                  <directionalLight position={[3,2,1]} />
                  <Sphere args={[1,100,200]} scale={2.8}> 
                    <MeshDistortMaterial color="#270736" attach="material" distort={0.5} speed={3}/>
                  </Sphere>


              </Canvas>
              <Img src="./img/main1.png" />
            </Right>
          </Container>
    </Section>
  )
}

export default Hero