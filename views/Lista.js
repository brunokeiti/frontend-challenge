import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';
import jsonCores from './Json';
import Loadable from 'react-loadable';

function Loading({ error }) {
  if (error) {
    return (
      <Text>Erro</Text>
    );
  } else {
    return (
      <View style={{margin:50}}>
        <ActivityIndicator size="large" color={'green'}/>
      </View>
    )
  }
}

const Header = Loadable({
  loader: () => import('../components/Header'),
  loading: Loading
});

const Item = Loadable({
  loader: () => import('../components/Item'),
  loading: Loading
});

export default class Lista extends React.Component {

  constructor ( props ){
    super ( props );
    this.state = {
      title: 'Menu Principal',
      loading: true,
    }
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <Header
          onPressBack={() => {}}
          noBack={true}
          title={this.state.title}
        />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ScrollView contentContainerStyle={{paddingBottom:20, backgroundColor: 'transparent', flexDirection: 'column'}}>

          {Array.isArray(jsonCores) && jsonCores.map((itemLista,index) => {
            return(
              <Item
                key={itemLista.value}
                detalhes={itemLista}
                onPressItem={() => {this.props.navigation.navigate('Detalhes', {detalhes:itemLista})}}
              />
            )
          })}

          </ScrollView>
        </View>
      </View>
    );
  }
}
