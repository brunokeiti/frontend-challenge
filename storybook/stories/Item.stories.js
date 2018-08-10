import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Item from '../../components/Item';

import jsonCores from '../../views/Json';

storiesOf('Item', module)
.addDecorator(story => (
  <ScrollView contentContainerStyle={{paddingBottom:20, backgroundColor: 'transparent', flexDirection: 'column'}}>
    {story()}
  </ScrollView>
))
.add('White', () => (
  <Item
    key={jsonCores[0].value}
    detalhes={jsonCores[0]}
  />
))
.add('Blue', () => (
  <Item
    key={jsonCores[1].value}
    detalhes={jsonCores[1]}
  />
))
.add('Black', () => (
  <Item
    key={jsonCores[2].value}
    detalhes={jsonCores[2]}
  />
))
.add('Red', () => (
  <Item
    key={jsonCores[3].value}
    detalhes={jsonCores[3]}
  />
))
.add('Green', () => (
  <Item
    key={jsonCores[4].value}
    detalhes={jsonCores[4]}
  />
))
