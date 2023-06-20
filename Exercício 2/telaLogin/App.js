import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, ImageBackground, ScrollView, Text, Button} from "react-native";
const image = {uri: 'https://reactjs.org/logo-og.png'};

export default class App extends Component {

  render() {
    
    return (
    
      <View style={styles.imageContainer}>
        <ScrollView  style={styles.scrollView}>
      
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <View style={styles.smallContainer}>

      <Text style={styles.text}>
          SIGN IN
      </Text>
      
        <TextInput
          placeholder="Enter Your Username"
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle1}
        />

        <TextInput
          placeholder="Password"
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle2}
          secureTextEntry={true}
        />
        <Text style={styles.text2}>
          Need help? Forgot password?
      </Text>


      <Button
        title="Sign In"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
      </View>
       </ScrollView>
       </View>
    );
  
  }
}


const styles = StyleSheet.create({

  imageContainer: {
    justifyContent: 'center',
    height: '600%',
    backgroundColor: '#1c4968',
  },

  image: {
    justifyContent: 'center',
    height:200,
    marginTop: 60,
  },

  text: {
    marginTop: '12%',
    marginBottom: '4%',
    marginLeft: '42%',
    fontSize: 15,
    fontWeight: 'bold',
     color: 'white',    
  },


  text2: {
    marginLeft: '5%',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',    
    marginBottom: '12%',
    marginTop:'-3%',
  },


  smallContainer: {
    height:'40%',
    justifyContent: 'center',
    marginBottom: '25%',
    width: '100%',
    marginTop: '8%',

  },

  TextInputStyle1: {
    width: '90%',
    margin: '5%',
    marginTop: '5%',
    textAlign: 'center',
    height: '20%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688', 
    color: 'black',
    backgroundColor: 'white'
  },

   TextInputStyle2: {
    width: '90%',
    margin: '5%',
    marginTop: '1%',
    textAlign: 'center',
    height: '20%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688', 
    color: 'black',
    backgroundColor: 'white', 

  },

  scrollView: {

  },
});

