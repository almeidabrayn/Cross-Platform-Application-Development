import { View, Text, Image, StyleSheet } from 'react-native';
 
export default function DetalheScreen({ route }) {
  const { item } = route.params;
  
 
  return (
    <View style={styles.container}>
      <Image source={item.foto} style={styles.foto} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#b8b7b4' },
  foto: { width: 220, height: 220, borderRadius: 16, marginTop: 20 },
  nome: { fontSize: 26, fontWeight: 'bold', marginTop: 16 },
  descricao: { fontSize: 16, color: '#555', marginTop: 8, textAlign: 'center' },
  preco: { fontSize: 22, fontWeight: 'bold', color: '#774c00', marginTop: 16 },
});