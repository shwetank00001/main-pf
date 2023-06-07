import React from 'react'
import styled from "styled-components";


const Projects = () => {

    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        
    }
    
    `
    const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    z-index : 999;


    `
    const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 50px;
    

    @media only screen and (max-width: 768px) {
       flex-direction: column;
       justify-content: center;
       align-items: center;
       text-align: center;
    }
    `

    const LeftHeading = styled.h3`
    color: lightblue;
    `

    const LeftLink= styled.a`
    color:white;
    text-decoration: none;
    
    `
    const ProjectHeader = styled.h1`
    color:#aa76f5;
    `

        
  return (
    <Section>
      <Container>

        <Left>
          
          <ProjectHeader>Projects</ProjectHeader>
          <div>
            <LeftHeading>  Frontend Projects</LeftHeading>
        
              <p>1. Digital Card</p>
              <p><LeftLink href="https://travel-journal-shwetank.netlify.app/"  target="_blank">2. Travel Journal</LeftLink></p>
              <p><LeftLink href="https://box-coloring.netlify.app/"  target="_blank">3. Box-Coloring </LeftLink></p>
              <p><LeftLink href="https://todo-app-reducer-shwetank.netlify.app/"  target="_blank">4. Todo App using useReducer </LeftLink></p>
              <p><LeftLink href="https://memegen-shwetank.netlify.app/" target="_blank"> 5. Meme Generator</LeftLink></p>  
              <p> <LeftLink href='https://shwetank00001.github.io/web1/' target="_blank"> 6. Webpage using vanilla HTML and CSS</LeftLink></p> 
          </div>
          <div>
            
            
              <LeftHeading>Fullstack Projects</LeftHeading>
              <p><LeftLink href="https://crud-app-shwetank.netlify.app/"  target="_blank">1. Basic Crud App using MockAPI</LeftLink></p>
              <p><LeftLink href="https://cartapp-redux.netlify.app/"  target="_blank">2. Shopping App using Redux</LeftLink></p>
              <p><LeftLink href="https://github.com/shwetank00001/CloudTask">3. Task Manager with Express </LeftLink></p>
              <p><LeftLink href="https://github.com/shwetank00001/csgo-flask-miniproject"  target="_blank">4. CSGO Flask App</LeftLink></p>
              <p><LeftLink> 5. Jobs API</LeftLink></p>  
              <p> <LeftLink> 6. Store API</LeftLink></p> 
          </div>

        </Left> 
      </Container>
    </Section>
  )
}

export default Projects