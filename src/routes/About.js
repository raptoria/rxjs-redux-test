import React, { PropTypes } from 'react';
import { Container, Header, Button, Image } from 'semantic-ui-react'

const About = ({ counter }) => {

  return (
   <Container textAlign='center'>
    <p />
    <Header as='h2'>About</Header>
      <div className="center-block text-center">
        <h1>Votes: {counter}</h1>
      </div>
    </Container>
  );
};

export default About;
