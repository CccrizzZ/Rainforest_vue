import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Overview extends React.Component {
  static navigationOptions = {
    title: 'Overview',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Overview</Text>
      </ScrollView>
    );
  }
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
