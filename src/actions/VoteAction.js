import Rx from 'rxjs';

const subjects = {
  handleVotes$: new Rx.Subject(),
  clearVotes$: new Rx.Subject()
};

export default {
  subjects,
  handleVotes: (votes) => subjects.handleVotes$.next(votes),
  clearVotes: () => subjects.clearVotes$.next()
};
