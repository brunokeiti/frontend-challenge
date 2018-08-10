import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Header from '../components/Header';


export default class Detalhes extends React.Component {

  constructor ( props ){
    super ( props );
    this.state = {
      title: 'Detalhes',
      detalhes: this.props.navigation.getParam('detalhes'),
    }
  }

  render() {

    return (
      <View style={{flex: 1}}>
        <Header
          onPressBack={() => {this.props.navigation.dispatch(NavigationActions.back())}}
          noBack={false}
          title={this.state.title}
        />
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: this.state.detalhes.value }}>
          <ScrollView contentContainerStyle={{padding:20, flexDirection: 'column'}}>

            <Text style={[{color:this.state.detalhes.textColor},style.Titulo]}>{this.state.detalhes.color}</Text>
            <Text style={[{color:this.state.detalhes.textColor},style.Texto]}>{this.state.detalhes.text}</Text>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Titulo: {
    fontSize: 20,
  },
  Texto: {
    fontSize: 12,
  },
});
