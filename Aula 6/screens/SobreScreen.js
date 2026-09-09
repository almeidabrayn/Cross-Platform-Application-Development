import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
 return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Sabor & Cia</Text>
        <Text style={styles.texto}>
            Cozinha italiana, no coração da cidade de São Paulo.
        </Text>
        <Text style={styles.texto}>Rua das Flores, 123 — 12h às 23h</Text>
    </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
 titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
 texto:{ fontSize: 15, color: '#444', textAlign: 'center', marginTop: 6 },
});