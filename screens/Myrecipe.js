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

export default class Myrecipe extends React.Component {
  static navigationOptions = {
    title: 'My Recipe',
  };

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text>My Recipe</Text>
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