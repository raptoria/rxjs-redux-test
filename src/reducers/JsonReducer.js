
import Rx from "rxjs";
import JsonAction from '../actions/JsonAction';

const JsonReducer$ = Rx.Observable.merge(
  JsonAction.subjects.goGetJSON$.map((data) =>
    state => ({ ...state, results: data })
   ),

  JsonAction.subjects.goPostJSON$.map((data) =>
    state => ({ ...state, postResult: data })
   ));

export default JsonReducer$;
