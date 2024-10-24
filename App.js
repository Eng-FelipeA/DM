const { createStackNavigator } = require("@react-navigation/stack");
import { NavigationContainer } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import InicialScreen from './src/screens/IniciaScreen';
import ConsultaScreen from './src/screens/ConsultaScreen'

//criando o Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        {/*Definindo a tela Inicial*/}
        <Stack.Screen name="Inicial" component={InicialScreen}></Stack.Screen>
        {/* Definindo a tela "Cadastro" */}
        <Stack.Screen name="Cadastro" component={CadastroScreen}></Stack.Screen>
        {/* Definindo a tela "Consulta" */}
        <Stack.Screen name="Consulta" component={ConsultaScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
