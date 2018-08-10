import React from 'react';
import Header from './components/Header';
import Item from './components/Item';

import renderer from 'react-test-renderer';

it('Header renders without crashing', () => {
  const rendered = renderer.create(<Header />).toJSON();
  expect(rendered).toBeTruthy();
});

it('Item renders without crashing', () => {
  const data = {
    onPressItem: () => {},
    detalhes: {
      value: '#f00',
      textColor: '#fff',
      color: 'Red',
    }
  }
  const rendered = renderer.create(<Item {...data}/>).toJSON();
  expect(rendered).toBeTruthy();
});
