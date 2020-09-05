import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./index.scss";

import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * Hot Module Replacement
 * only for dev builds
 */
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./app', () => {
      // Load the changed version and render it.
      const NextApp = require('./app').default; // eslint-disable-line global-require
      ReactDOM.render(<NextApp />, document.getElementById("root"));
    });
  }
}
