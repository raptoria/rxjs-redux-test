
import Rx from "rxjs";
import VoteAction from '../actions/VoteAction';
import nemesisList from '../constants/NemesisConstants';
import socket from '../rx-state/Socket';

const broadcast = (newState) => {
    if (socket.connected) {
        socket.emit('cast vote', newState);
   }
 }

const VoteReducer$ = Rx.Observable.merge(
  VoteAction.subjects.handleVotes$.map((vote) =>
    state => {
       let votes = state.votes;
       votes[vote]++;
       let newState = { ...state, counter: state.counter + 1, votes: votes, selectedVote: vote };
       broadcast(newState);
       return newState;
    }),

  VoteAction.subjects.clearVotes$.map(() =>
    state => {
      let newState = { ...state, counter: 0, votes: Object.assign({}, nemesisList) }
      broadcast(newState);
      return newState;
    })
   );

export default VoteReducer$;
