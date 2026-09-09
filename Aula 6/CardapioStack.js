import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardapioScreen from './screens/CardapioScreen';
import DetalheScreen from './screens/DetalheScreen';


const Stack = createNativeStackNavigator();
 

export default function CardapioStack() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Cardapio" component={CardapioScreen}  />
        <Stack.Screen name="Detalhe" component={DetalheScreen} options={{ title: 'Detalhes do prato' }} />
      </Stack.Navigator>

  );
}
