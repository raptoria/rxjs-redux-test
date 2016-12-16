import React, { PropTypes, Component } from 'react';
import HBar from './Chart/HorizontalChart';
import connect from '../rx-state/Connect';
import VoteAction from '../actions/VoteAction'
import borgCube from '../assets/cube.png';
import RadioGroup from './RadioGroup/RadioGroup';
import { Container, Form, Header, Button, Image, Radio, Segment } from 'semantic-ui-react'

class Survey extends Component {

  state = {
   'likes': 0
  }

  static propTypes = {
    counter: React.PropTypes.number,
    votes: React.PropTypes.object,
    selectedVote: React.PropTypes.string
  } 

  handleVote = (e, { value }) =>  VoteAction.handleVotes(value);

  handleClear(){
    VoteAction.clearVotes();
  }

  addLikes(){
    let likes = this.state.likes;
    likes++;
    this.setState({ likes });
  }

  formatChartData(votes){
    let data = {};
    let seriesArr = [];
    data.labels = Object.keys(votes);

    for( let prop in votes){ 
        seriesArr.push(votes[prop]);
    }
    data.series = [seriesArr];
    return data; 
  }

render () {
  let { votes, selectedVote } = this.props;
  let { likes } = this.state;
  console.log("Survey view re-rendered");
  return (
    <Container textAlign='center'>
    <p />
    <Header as='h2'>Best Star Trek Nemesis</Header>
      <Image shape='rounded' size='medium' src={borgCube} centered /><p />
      <Container textAlign='center'>
        <Header as='h3'>Cast your vote!</Header>
        <RadioGroup selectedVote={selectedVote} handleVote={(e, {value}) => this.handleVote(e, {value})} />
         <br /><br />
        <Segment padded secondary>
        <Header as='h2'>Votes: {this.props.counter}</Header>
        { votes ? <HBar data={this.formatChartData(votes)} /> 
        : ' '}
        <br />
        </Segment>
        <Button onClick={() => this.handleClear()}>Clear</Button>
        &nbsp;&nbsp;&nbsp;
        <Button
            content='Like'
            icon='heart'
            label={{ as: 'a', basic: true, content:likes, color:'green'}}
            color='green'
            onClick={() => this.addLikes()}
            labelPosition='right'
          />
     </Container>
    </Container>
  );
 };
};

export default connect( state => ({
  counter: state.counter,
  votes: state.votes,
  selectedVote: state.selectedVote
}))(Survey);



