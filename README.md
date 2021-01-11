[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/GlennSandoval/react-boilerplate)

# React Boilerplate

Opinionated starting point for creating a React single page app. Designed to include useful and quality of life tools for faster development time. With some emphasis on making thing beginner friendly.

### Why not use Create React App? (CRA)
CRA is good for getting started quickly if you are not concerned with how or what it does. If you do need to tweak settings, or use the very latest versions then it can get it the way.

## Technologies included
* React - *[A JavaScript library for building user interfaces](https://reactjs.org/)*
* React Router - *[Declarative Routing for React.js](https://reactrouter.com/)*
* Typescript - *[Typed javaScript](https://www.typescriptlang.org/)*
* Sass - *[Syntactically awesome CSS](https://sass-lang.com/)*
* Babel - *[A javaScript compiler](https://babeljs.io/)*
* Webpack - *[A javaScript bundler](https://webpack.js.org/)*
* Jest - *[A javaScript testing Framework with a focus on simplicity](https://jestjs.io/)*
* Cypress - *[A javascript end-to-end testing framework](https://www.cypress.io/)*

## Why I chose these packages

### React:
React has a lot of community support and good documentation. It scales well between small and large apps. The biggest pitfall is that people tend to treat is as an app framework, when it is specifically a UI framework.

### Typescript:
Not needed for a small app, but a huge help as your app starts to scale up. Catch bugs at coding time rather than run time. Has a fairly high learning curve, but it pays off. It can work with plain Javascript, so you are not forced to use it. Over use of Typescript can make the code hard to read. My general rule is that about 25% or less of the code in a project should be a type definition.

### Sass:
Makes styling your app __much__ easier. I feel that it is more intutive than CSS.

### Babel:
I use this for it's polyfill (support for older browsers). Having TS and Babel in the same project gives you options about how your app compiles and how TS is enforced.

### Webpack:
I love Webpack. It has a __high__ learning curve, and a bad reputation. If set up properly it can greatly speed up your development time. The Webpack setup in this project is probably its biggest advantage. Webpack enables [hot module replacement](https://webpack.js.org/guides/hot-module-replacement/). If that is all it did I would use it. It also makes TS, Babel and Sass hang together nicely, and prepares your app for deployment. If optimized properly it can make your app load faster and easier to upgrade.

### Jest:
I used to dislike Jest. It was too simple. Then I realized that I *want* unit tests to be simple. Jest is a test framework and test runner in one. Mocha/Karma is good too, but nowadays I prefer Jest.

### Cypess:
It's like Selenium specifically for JS. Easy to set up and run, easy to create tests. Catches errors that TS and Jest don't catch. If you use it all the time it should make you use sane CSS class names.

## ESLint / Prettier
Code should be easy to read. Code is easy to read when it has a consistent style. The difficulty in agreeing on a code style scales exponentially with the number of developers on a team. You don't want to waste valuable time deciding where to place your curly brackets. Just use Prettier. You'll get used to it. ESLint and Prettier are integrated in this repo so if your code is not conforming it will show up as an ESLint error. Which should rarely happen since you can use your IDE of choice to apply the Prettier format.

### Note about Redux
Redux is intentionally not included. Redux is a great tool but it has specific uses. Including it greatly changes the structure and flow of an app. Use React hooks as much as possible and only add Redux when needed.