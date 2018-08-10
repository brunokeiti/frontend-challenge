import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Header from '../../components/Header';

storiesOf('Header', module)
  .add('Lista', () => (
    <Header
      onPressBack={() => {}}
      noBack={true}
      title={'Menu Principal'}
    />
  ))
  .add('Detalhes', () => (
    <Header
      onPressBack={() => {this.props.navigation.dispatch(NavigationActions.back())}}
      noBack={false}
      title={'Detalhes'}
    />
  ))
