import Rx from "rxjs";
import createState from "./createState";
import VoteReducer$ from "../reducers/VoteReducer";
import nemesisList from '../constants/NemesisConstants';
import JsonReducer$ from "../reducers/JsonReducer";
import SocketReducer$ from "../reducers/SocketReducer";

 let initialState = {
   postResult: [],
   results: [],
   counter: 0,
   votes: Object.assign({}, nemesisList),
   selectedVote: 'dominion'
};

const reducer$ = Rx.Observable.merge(
   VoteReducer$,
   JsonReducer$,
   SocketReducer$
);

const initialState$ = Rx.Observable.of(initialState);
const state$ = new Rx.ReplaySubject(1);  //keep track of the global state

const setupState = (() => {
    console.log("Creating new instance of State");
    let obs = createState(reducer$, initialState$);
    obs.subscribe((newState) => { 
       state$.next(newState);
    });
})();

export default state$;
