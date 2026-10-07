import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (item.trim() === '') {
      return;
    }

    setLista([...lista, item]);
    setItem('');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Compras
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={item}
        onChangeText={setItem}
      />

      <Button
        title="Adicionar"
        onPress={adicionarItem}
      />

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            • {item}
          </Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16
  },

  item: {
    fontSize: 20,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});