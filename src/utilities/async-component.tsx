import React, {Component} from 'react';

/**
 * Retry an asynchronous function
 * @param fn - async function
 * @param retriesLeft - number of times to retry
 * @param interval - interval in ms to wait between retries
 * @returns {Promise<any>}
 */
function retry(fn: Function, retriesLeft = 3, interval = 1500): Promise<any> {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: any) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

/**
 * Create a wrapper around a component to load it asynchronously.
 * @example
 * const Component = asyncComponent(() => import('./views/pages/Component'));
 *
 * @param {function} importComponent
 * @param {Element} Placeholder - UI to show while component is loading
 * @returns {AsyncComponent}
 */
export default function asyncComponent(importComponent: Function, Placeholder = (<div />)) {
  /**
   * Wrapper component that handles the asynchronous loading of components.
   */
  class AsyncComponent<P = {}> extends Component<any> {

    unMounted: boolean;

    state: {
      component: typeof React.Component | null,
      error: any
    }

    constructor(props: Readonly<P>) {
      super(props);

      this.unMounted = false;

      this.state = {
        // This will reference the component once loaded
        component: null,
        error: null,
      };
    }

    async componentDidMount() {
      const self = this;
      const result: { default: Component<any, any, any> } = await retry(importComponent)
        .catch((error) => {
          if (!self.unMounted) {
            self.setState({error});
          }
        });

      if (self.unMounted || !result?.default) {
        return;
      }

      // Once the component loads, calling setState will trigger a render of the now loaded component.
      self.setState({
        component: result.default,
        error: null,
      });
    }

    componentWillUnmount() {
      this.unMounted = true;
    }

    render() {
      const {component: WrappedComponent, error} = this.state;

      if (error) {
        throw error;
      }

      // If the component is loaded, render it.
      if (WrappedComponent != null) {
        return (<WrappedComponent {...this.props} />);
      }

      return Placeholder;
    }
  }

  return AsyncComponent;
}
