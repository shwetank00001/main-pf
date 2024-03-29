import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  z-index : 999;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;     
  z-index : 999;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index : 999;
  font-family: 'Roboto', sans-serif;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index : 999;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  z-index : 999;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
  background-color: #aa76f5;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const Right = styled.div`
  flex: 1;
  z-index : 999;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_481arsf",
        "template_y2zxor1",
        ref.current,
        "ywXbuokMhg1Qkj1mu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Let's connect..</Title>
            <Input placeholder="Name" name="name" />
            <TextArea
              placeholder="Your message here.."
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Thanks for the feedback <3"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;