import Rx from 'rxjs';
import socket from '../rx-state/Socket';

const setupSockets = () => {
    let observable = Rx.Observable.create ( (obs) => {
        console.log('setup sockets called');
        socket.on('cast vote', (newState) => {
          console.log("updating votes on the client")
          obs.next( newState );
        });

        socket.on('error', (err) => obs.onError(err));
        socket.on('reconnect_error', (err) => obs.onError(err));
        socket.on('reconnect_failed', () => obs.onError(new Error('reconnection failed')));
        //socket.on('disconnect', () => {});

        // Return way to unsubscribe
        return () => socket.close();
    });

    return observable; 
}

export default {
  socketObservable$: setupSockets(),
};
