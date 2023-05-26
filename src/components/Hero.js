import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';



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
      
      `
      const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      `
      const Title = styled.h1`
      color: #da4ea2;
      font-size: 50px;
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
      `
      const Right = styled.div`
      flex: 2;
      position: relative;

      `
      const Img = styled.img`
      width: 800px;
      height: 600px;
      object-fit: contain;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;

      animation: animate 2s infinite ease alternate;

      @keyframes animate{
        to{
          transform: translateY(20px);
        }
      }
      `

  return (
    <Section>
      <Navbar />
          <Container>
            <Left>
              <Title>shwetank.</Title>
              <MySelf>
                <Line src="./img/line.png"/>
                <Brief>FullStack Dev. </Brief>
              </MySelf>
              <Desc>Im Shwetank</Desc>

            </Left>


            <Right>
              <Img src="./img/moon.png" />
            </Right>
          </Container>
    </Section>
  )
}

export default Hero