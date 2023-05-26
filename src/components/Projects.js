import React from 'react'
import styled from "styled-components";

const Projects = () => {

    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    `
    const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    `
    const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    `

    const LeftHeading = styled.h3`
    color: #da4ea2;
    `

    const LeftLink= styled.a`
    color:white;
    text-decoration: none;
    `


        
  return (
    <Section>
      <Container>

        <Left>
          
          <h1>Click the project to view source code and the deployment</h1>
          <div>
            <LeftHeading>  Frontend Projects</LeftHeading>
        
              <p>1. Digital Card</p>
              <p><LeftLink href="https://github.com/shwetank00001/my-travel-journal"  target="_blank">2. Travel Journal</LeftLink></p>
              <p><LeftLink href="https://github.com/shwetank00001/Box-Coloring"  target="_blank">3. Box-Coloring </LeftLink></p>
              <p>4. csgo-flask-miniproject </p>
              <p><LeftLink href="https://github.com/shwetank00001/Meme-generator" target="_blank"> 5. Meme Generator</LeftLink></p>  
              <p> <LeftLink href='https://shwetank00001.github.io/web1/' target="_blank"> 6. Webpage using vanilla HTML and CSS</LeftLink></p> 
          </div>
          <div>
            
            
              <LeftHeading>Fullstack Projects</LeftHeading>
              <p>1. Basic Crud App using MockAPI</p>
              <p><LeftLink href="https://github.com/shwetank00001/my-travel-journal"  target="_blank">2. Tenzies Game</LeftLink></p>
              <p><LeftLink href="https://github.com/shwetank00001/Box-Coloring"  target="_blank">3. MERN App </LeftLink></p>
              <p>4. csgo-flask-miniproject </p>
              <p><LeftLink href="https://github.com/shwetank00001/Meme-generator" target="_blank"> 5. Meme Generator</LeftLink></p>  
              <p> <LeftLink href='https://shwetank00001.github.io/web1/' target="_blank"> 6. Webpage using vanilla HTML and CSS</LeftLink></p> 
          </div>

        </Left> 
      </Container>
    </Section>
  )
}

export default Projects