import React, { PropTypes } from 'react';
import {Container, Header, Button, Icon, Label, Image, Message} from 'semantic-ui-react';
import testImage from '../assets/sui-logo.png';
import AnimatedButton from '../components/AnimatedButton/AnimatedButton';
import AccordionWidget from '../components/AccordionWidget/AccordionWidget';
import ModalPopup from '../components/ModalPopup/ModalPopup';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const Semantic = () => {

  return (
       <Container textAlign='center'>
       <p />
       <Header as='h2'>Semantic UI POC</Header>
       <Image src={testImage} shape='circular' centered size='tiny'/>
       <p />
        <Container textAlign='left'>
          <Breadcrumbs />
           <p />
          <Message icon>
               <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  We are fetching that content for you.
                </Message.Content>
            </Message>
            <p />
            <AccordionWidget />
             <p />
            <AnimatedButton />
             <p />
             <ModalPopup />
             <p />
            <Label>
              <Icon name='mail' /> 23
            </Label>
         </Container>
      </Container>
  );
};

export default Semantic;
