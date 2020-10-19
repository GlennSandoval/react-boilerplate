import React from 'react';
import renderer from 'react-test-renderer';

import Home from './home';

test('Snapshot',()=>{
  const app = renderer.create(<Home/>);
  let tree = app.toJSON();
  expect(tree).toMatchSnapshot()
});
