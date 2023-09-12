import React from "react";
import {StyleSheet, View, Styles} from 'react-native';
import { Input, Center, NativeBaseProvider, Image, Text, Button, Box, Container } from "native-base";

const Main = () => {
return <Box style={styles.box} position = "absolute"></Box>

};
const Example = () => {

  return <Center>  

  <Image source={{
    uri: "https://reactjs.org/logo-og.png"
  }} style={styles.image} alt="Alternate Text" size={180} width= {450}/>


  <Text fontSize="lg" color={"white"} style={styles.text1}>SIGN IN</Text>

<Box style={styles.Inputs}>

<Center>
  <Box>
  <Input w="100%"  placeholder="Enter Your Username" _light={{
    placeholderTextColor: "blueGray.400",
    backgroundColor: "white"
  }} _dark={{
    placeholderTextColor: "blueGray.50"
  }} />
  </Box>

  <Box style={styles.senha}>
  <Input w="100%"  placeholder="Password" _light={{
    placeholderTextColor: "blueGray.400",
    backgroundColor: "white"
  }} _dark={{
    placeholderTextColor: "blueGray.50"
  }} />
   </Box>
   </Center>

   


  <Text fontSize="sm" color={"white"} style={styles.text2}>Need help? Forgot password?</Text>

    <Box style={styles.boxBtn} alignItems="center" w="100%" >
      <Button w="100%" style={styles.button}>SIGN IN</Button>
    </Box>

  </Box>
  </Center>;
};

export default () => {

  return (
    <NativeBaseProvider>
      <Center flex={1} >
        <Main />
          <Example />
          
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({

  image: {
    position: "absolute",
    top: -250,
  },

  senha: {
    borderRadius: 20,
  },

  text1: {
    position: "absolute",
    top: -30,
    fontWeight: "bold",
  },

  text2: {
    position: "absolute",
    top: 110,
    left: 0,
  },

  box: {
    backgroundColor: "#1c4968",
    height: 1000,
    width: 1000,
  },

  button: {
    backgroundColor: "#2196f3",
    width: 1000,
  },

  boxBtn:{
    position: "absolute",
    top: 180,
  },

  Inputs:{
    position: "absolute",
    top: 30,
    width: 350,
  },

  senha: {
    top: 20,
  }

});

