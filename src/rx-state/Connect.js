import React from "react";
import state$ from '../rx-state/State';

function connect(selector = (state) => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      componentWillMount() {
        this.subscription = state$.map(selector).subscribe(::this.setState);
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    };
  }
}

export default connect;
