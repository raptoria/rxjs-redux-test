import React, { PropTypes, Component } from 'react';
import JsonAction from '../actions/JsonAction';
import JsonResult from '../components/JsonResults';
import connect from '../rx-state/Connect';
import { Container, Header, Button, Image, Segment } from 'semantic-ui-react'

class Json extends React.Component  {

  handleGetJSON(){ 
    JsonAction.getJSON(); 
  };

  static propTypes = {
    postResult: React.PropTypes.array,
    results: React.PropTypes.array
  }

  render() {
   let  {postResult, results} = this.props;
    return (
           <Container textAlign='center'>
           <p />
           <Header as='h2'>Let's pull in some Data</Header>
            <div className="center-block text-center">
              <Button primary onClick={ () => this.handleGetJSON() }>Click to view JSON</Button>
            </div>
            <h1>Results: </h1>
              {(results.length > 0) ? <Container text textAlign="left"><Segment padded secondary><JsonResult {...this.props} /></Segment></Container>: " "}
          </Container>
      );
    };
 }

export default connect(state => ({
  postResult: state.postResult,
  results: state.results,
}))(Json);
