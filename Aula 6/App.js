import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CardapioStack from './CardapioStack';
import SobreScreen from './screens/SobreScreen';

const Tab = createBottomTabNavigator();
export default function App() {
 return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{ height:60} }}>
            <Tab.Screen
            name="CardapioTab"
            component={CardapioStack}
            options={{
            title: 'Cardápio',
            tabBarIcon: ({ color }) =>
            <Ionicons name="restaurant" size={24} color={color} />,
            }}
            />
            <Tab.Screen
            name="Sobre"
            component={SobreScreen}
            options={{
              tabBarIcon: ({color}) => <Ionicons name="information-circle" size={24} color={color} />,
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
 );
}