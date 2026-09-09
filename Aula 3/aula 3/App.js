import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Cartao } from './Cartao';

const pessoas = [
  {
    id: '1',
    nome: 'Anderson Silva',
    cargo: 'Aluno de Ciência da Computação',
    foto: require('./assets/avatar1.jpg'),
  },
  {
    id: '2',
    nome: 'Beatriz Lima',
    cargo: 'Aluna de Engenharia de Software',
    foto: require('./assets/avatar2.jpg'),
  },
    {
    id: '3',
    nome: 'Rodrigo Moraes',
    cargo: 'Professor',
    foto: require('./assets/avatar3.jpg'),
  },
  
];


export default function App() {
  return (
 
    <FlatList
      data={pessoas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Cartao
          nome={item.nome}
          cargo={item.cargo}
          foto={item.foto}
        />
      )}
      contentContainerStyle={styles.container}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#060922',
  },
});