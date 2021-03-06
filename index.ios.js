/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ScriptRunner = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Script Runner</Text>
        <View style={styles.center}>
          <View style={styles.box}>
            <Text>Shaheen</Text>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131125',
    padding: 10,
    color: 'white',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
  },
  box: {
    transform: [{rotate:'-30deg'}]
  }
});

AppRegistry.registerComponent('ScriptRunner', () => ScriptRunner);
