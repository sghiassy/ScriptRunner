/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {AppRegistry, Image, StatusBarIOS, StyleSheet, Text, View} = React;
var Tile = require('./src/tile');

var ScriptRunner = React.createClass({
  componentWillMount: function() {
    StatusBarIOS.setStyle(1); // Set status bar to white
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Script Runner</Text>
        <View style={styles.center}>
          <Tile title="Shaheen2"></Tile>
        </View>
        <View style={styles.addIconBox}>
          <Image source={require('image!add13')} style={styles.addIconImage}/>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  addIconBox: {
    alignItems: 'flex-end',
    marginRight: 2,
    marginBottom: 4
  },
  addIconImage: {
    width: 40,
    height: 40,
    opacity: .4
  },
  container: {
    flex: 1,
    backgroundColor: '#131125',
    paddingTop: 20,
    paddingLeft: 10,
    color: 'white'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontFamily: "AvenirNext-Ultralight",
    color: 'white',
    fontSize: 35
  }
});

AppRegistry.registerComponent('ScriptRunner', () => ScriptRunner);
