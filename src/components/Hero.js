import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';



const Hero = () => {
    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    `
  return (
    <Section>
      <Navbar />
    </Section>
  )
}

export default Hero