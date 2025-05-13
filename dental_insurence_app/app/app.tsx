import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import CadastroDentista from './screens/cadastrar-dentista';
import CadastroPaciente from './screens/cadastrar-paciente';
import Login from './screens/login';
import Paciente from './screens/paciente';
import Calendario from './screens/calendario';
import Dentista from './screens/dentista';
import Agendamentos from './screens/agendamentos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroDentista" component={CadastroDentista} />
        <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} />
        <Stack.Screen name="Dentista" component={Dentista} />
        <Stack.Screen name="Paciente" component={Paciente} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="Agendamentos" component={Agendamentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
