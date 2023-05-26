import React from 'react'
import styled from "styled-components";



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
      font-size: 24px;
      `


  return (
    <Section>
     
          <Container>
            <Left>


            </Left>


            <Right>
                <Title>About Me</Title>
                <Desc>main about here</Desc> 
            </Right>
          </Container>
    </Section>
  )
}

export default About