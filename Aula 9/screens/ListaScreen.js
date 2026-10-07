import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function ListaScreen({ navigation }) {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function buscarProdutos() {
      const resposta = await fetch('https://dummyjson.com/recipes?limit=20');
      const json = await resposta.json();
      setDados(json.recipes);
    }
    buscarProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detalhe', { item })}
          >
            <Image source={{ uri: item.image }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.name}</Text>
              <Text style={styles.preco}>Preparação:  {item.prepTimeMinutes}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 10,
  },
  foto: { width: 80, height: 80, borderRadius: 8 },
  info: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 15, color: '#774c00', marginTop: 4 },
});