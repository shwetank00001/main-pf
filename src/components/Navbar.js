import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";


const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;



const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;



const Navbar = () => {




  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>About Me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Resume</ListItem>
          </List>
        </Links>

      </Container>
    </Section>
  );
};

export default Navbar;