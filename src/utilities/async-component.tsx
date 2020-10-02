import React, {useState, useEffect} from 'react';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

/**
 * Retry an asynchronous function
 * @param fn - async function
 * @param attempts - number of times to retry
 * @param interval - interval in ms to wait between retries
 */
async function retry(fn: Function, attempts = 3, interval = 1500) {
  let result = null;
  let tries = 0;
  while (tries < attempts) {
    try {
      result = await fn();
    } catch {
      await wait(interval);
    }
    tries++;
  }
  return result;
}

/**
 * Create a wrapper around a component to load it asynchronously.
 * @example
 * const Component = asyncComponent(() => import('./views/pages/Component'));
 */
export default function asyncComponent(importComponent: Function, Placeholder = (<div />)) {

  let UI: typeof React.Component | null = null;

  return function AsyncWrapper (props: any | null) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      async function load() {
        let payload = await retry(importComponent);
        UI = payload.default;
        setLoaded(true);
      }

      if (!loaded) {
        load().catch(console.log);
      }
    }, []);

    if (loaded && UI) {
      return (<UI {...props} />);
    }

    return Placeholder;
  }

}
