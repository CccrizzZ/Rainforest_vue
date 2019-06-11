import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import ImageStudy from './ImageStudy';

export default class Myplants extends React.Component {
  static navigationOptions = {
    title: 'My Plants',
  };

  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    
  }

  _Add(){
    this.setState({
      count: ++this.state.count
    })
  }
  _Substract(){
    this.setState({
      count: --this.state.count
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Text里面的包裹的Text会继承父元素的样式</Text>
        <Text>Text里面的包裹的Text会变成行内元素</Text>
        <Text style={styles.BlueText}>
          <Text>行内元素</Text>
          <Text>行内元素</Text>
          <Text>行内元素</Text>
          <Text>行内元素</Text>
          <Text>行内元素</Text>
        </Text>

        <View style={ styles.hr }/>

        <Text>鲍旋风</Text>
        <Text>鲍旋风</Text>
        <Text>鲍旋风</Text>
        <Text>鲍旋风</Text>
        <Text>鲍旋风</Text>
        <Text>View里面的Text独占一行</Text>
        <View style={ styles.hr }/>

        <Text style={{alignSelf:'center'}}>{ this.state.count }</Text>
        <Button onPress={this._Add.bind(this)}>Add</Button> 
        <Button onPress={this._Substract.bind(this)}>Substract</Button>
        <View style={ styles.hr }/>

        <Text>如果网络图片没有宽高则无法显示</Text>
        <ImageStudy/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf:'center',
  },
  contentContainer: {
    paddingTop: 30
  },
  BlueText:{
    color: "#00f",

  },
  hr:{
    borderBottomColor:'black',
    borderBottomWidth:1,
    width:'50%',
    alignSelf:'center',
    margin:10
  }
});
