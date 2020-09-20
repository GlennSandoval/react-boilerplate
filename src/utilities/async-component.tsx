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
  return function (props: any | null) {
    const [Inner, setInner] = useState<typeof React.Component | null>(null);

    useEffect(() => {
      async function load() {
        let payload = await retry(importComponent);
        setInner(payload);
      }

      load().catch(e => setInner(e));
    });

    if (Inner != null) {
      return (<Inner {...props} />);
    }

    return Placeholder;
  }

}
