import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardapioScreen from './screens/CardapioScreen';
import DetalheScreen from './screens/DetalheScreen';


const Stack = createNativeStackNavigator();
 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cardapio" component={CardapioScreen} options={{ title: 'Cardápio' }} />
        <Stack.Screen name="Detalhe" component={DetalheScreen} options={{ title: 'Detalhes do prato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

