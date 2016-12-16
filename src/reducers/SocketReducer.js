import Rx from "rxjs";
import SocketAction from '../actions/SocketAction';

const SocketReducer$ = Rx.Observable.merge(

  SocketAction.socketObservable$.map((newState) =>
    state => (newState)
   ));

export default SocketReducer$;
