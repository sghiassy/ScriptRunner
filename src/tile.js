'use strict';

var React = require('react-native');
var {StyleSheet, Text, View} = React;

var Tile = React.createClass({
  render: function() {
    return (
      <View style={styles.box}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  box: {
    transform: [{rotate: '-30deg'}],
    borderColor: 'white',
    borderWidth: 2,
    padding: 40,
    borderRadius: 10
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AvenirNext-Ultralight'
  }
});

module.exports = Tile;
