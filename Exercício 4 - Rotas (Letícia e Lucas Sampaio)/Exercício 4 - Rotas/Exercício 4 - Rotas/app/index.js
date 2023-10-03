import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Link } from 'expo-router';
import { ImageBackground, Image, TextInput, Button, Alert, Center, Pressable } from "react-native";


function Fundo() {
  
  return <Image source={require('./assets/Titulo.png')} alt="react logo" style={styles.imageSW}/>
}

function Btn() {
  
  return <Image source={require('./assets/play.png')} alt="play" style={styles.play}/>
}

export default function App() {

  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');

  const [number, onChangeNumber] = React.useState('');

  return (

  <View style={styles.container}>

    <ImageBackground source={require('./assets/Fundo.jpg')}
     style={styles.imageBackground}>

    <Fundo></Fundo>
    
    <Text style={styles.emailText} >


    </Text>


    <Text style={styles.senhaText}>



    </Text>

    

        <Text>
             {"\n"}
             
        </Text>

    
    
    <Link href="/cena1" style={styles.play}>
    <Btn></Btn>   
    </Link>

    

    </ImageBackground>



  </View>


)}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column"
  },

  emailText: {
    fontSize: 60,
    color: '#000000',
    marginBottom: 10,
    marginLeft: 50,

    position: 'absolute',
    top: 50,
    left: 40,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  button: {
    position: 'absolute',
    
    left: 90,
    height: 40,
    padding: 1,
    borderRadius: 20,
    top: 400,
  },
  play: {
    left: 45,
    top: 250,
  },


  envio: {
    color: '#FFFFFF',
    fontSize: 40,
    fontFamily: 'Roboto',
    

  },
  
  senhaText: {
    fontSize: 19,
    color: '#8E0033',
    marginTop: 18,
    marginBottom: 10,
    marginLeft: 50,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  
  input: {
    marginLeft: 30,
    marginRight: 30,
    height: 60,
    borderWidth: 2,
    padding: 10,
    borderColor: '#FF005C',
    backgroundColor: 'rgba(241, 184, 205, 0.5)',
    borderRadius: 20,

    fontSize: 20,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  imageSW: {
    resizeMode: "cover",
    width: 360,
    position: 'absolute',
    top: 30,
    left: 32,
  },
  
});