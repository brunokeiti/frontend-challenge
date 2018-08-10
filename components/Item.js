import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Item extends React.Component {
  render() {
      return (
        <TouchableOpacity onPress={this.props.onPressItem}>
          <View style={[{backgroundColor:this.props.detalhes.value},style.Lista]}>
            <Text style={[{color:this.props.detalhes.textColor},style.ListaDescricao]}>{this.props.detalhes.color}</Text>
          </View>
        </TouchableOpacity>
      );
    }
}

const style = StyleSheet.create({
  Lista: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
    flex: 1,
    borderRadius:5,
  },
  ListaDescricao: {
    fontSize: 20,
  },
});
