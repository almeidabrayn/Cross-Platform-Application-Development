import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetalheScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.foto} /> 
      <Text style={styles.titulo}>{item.name}</Text>
      <Text style={styles.descricao}>Calorias: {item.caloriesPerServing}</Text>
      <Text style={styles.preco}>Preparação {item.prepTimeMinutes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f2f2f2' },
  foto: { width: 260, height: 260, borderRadius: 16, marginTop: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginTop: 16, textAlign: 'center' },
  descricao: { fontSize: 16, color: '#555', marginTop: 8, textAlign: 'center' },
  preco: { fontSize: 22, fontWeight: 'bold', color: '#774c00', marginTop: 16 },
});