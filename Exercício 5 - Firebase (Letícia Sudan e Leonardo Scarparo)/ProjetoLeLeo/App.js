import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2oBjPgILXdT09aofnT97fitPKXpK8oMU",
  authDomain: "leleo-9430c.firebaseapp.com",
  projectId: "leleo-9430c",
  storageBucket: "leleo-9430c.appspot.com",
  messagingSenderId: "83303022883",
  appId: "1:83303022883:web:1d912f436d08b693610c96",
  measurementId: "G-WS612QXD3T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const App = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [dadosUsuarios, setDadosUsuarios] = useState([]);

  const testFirestoreConnection = async () => {
    try {
      if (nomeUsuario.trim() === '') {
        console.error('O nome do usuário não pode estar vazio.');
        return;
      }

      // Grava o nome do usuário no Firestore
      const docRef = await addDoc(collection(db, 'Usuários'), {
        nome: nomeUsuario,
      });
      console.log('Documento adicionado com ID:', docRef.id);

      // Limpa o campo após a gravação
      setNomeUsuario('');
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  };

  const lerDadosUsuarios = async () => {
    try {
      // Lê os dados da coleção "Usuários" no Firestore
      const querySnapshot = await getDocs(collection(db, 'Usuários'));
      const dados = [];
      querySnapshot.forEach((doc) => {
        dados.push({ id: doc.id, ...doc.data() });
      });
      setDadosUsuarios(dados);
    } catch (error) {
      console.error('Erro ao ler dados da coleção "Usuários":', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PROJETINHO LELEO</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o nome"
        value={nomeUsuario}
        onChangeText={(text) => setNomeUsuario(text)}
      />
      <Button title="Gravar novo usuário" onPress={testFirestoreConnection} />
      <Button title="Ler dados" onPress={lerDadosUsuarios} />
      
      <Text style={styles.subtitle}>Dados dos Usuários:</Text>
      <View>
        {dadosUsuarios.map((usuario) => (
          <Text key={usuario.id} style={styles.userText}>{usuario.nome}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlign: 'center', 
    color: '#000', 
  },
  userText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;

