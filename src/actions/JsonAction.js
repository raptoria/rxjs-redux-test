import Rx from 'rxjs';
import Request from '../api/api-json';

var subjects = {
  goGetJSON$: new Rx.Subject(),
  goPostJSON$: new Rx.Subject()
};

export default {
  subjects,
  getJSON: () => Request.get('posts').subscribe(::subjects.goGetJSON$.next),
  postJSON: () => Request.get('available').subscribe(::subjects.goPostJSON$.next)
};
