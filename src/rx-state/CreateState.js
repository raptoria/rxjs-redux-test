import Rx from "rxjs";

function createState(reducer$, initialState$ = Rx.Observable.of({})) {
  console.log("CreateState gets called");
  return initialState$
    .merge(reducer$)
    .scan((state, reducer) => reducer(state)) //scan takes an accumulator func and returns a result
    .publishReplay(1)
    .refCount();
}

export default createState;
