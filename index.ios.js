/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {AppRegistry, Image, StatusBarIOS, StyleSheet, Text, TouchableOpacity, View} = React;
var Tile = require('./src/tile');

var ScriptRunner = React.createClass({
  componentWillMount: function() {
    this.state = {
      tiles: ["Shaheen2", "test", "hazaa"]
    };
    StatusBarIOS.setStyle(1); // Set status bar to white
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Script Runner</Text>
        {this.renderTiles()}
        <TouchableOpacity style={styles.addIconBox} onPress={this.onPress}>
          <Image source={require('image!add13')} style={styles.addIconImage}/>
        </TouchableOpacity>
      </View>
    );
  },

  renderTiles: function() {
    var tiles = [];
    for (var i = 0; i < this.state.tiles.length; i++) {
      tiles.push(
        <Tile title={this.state.tiles[i]} ></Tile>
      );
    }

    return (
      <View style={styles.center}>
        {tiles}
      </View>
    );
  },

  onPress: function(evt) {
    console.log(evt);
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
    paddingLeft: 10
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
