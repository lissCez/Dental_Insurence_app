import CadastroPaciente from '@/app/screens/cadastrar-paciente';
import Pacientes from '@/app/screens/lista-pacientes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
export type RootStackParamList = {
    Pacientes: undefined;
    Cadastro: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pacientes">
                <Stack.Screen name="Pacientes" component={Pacientes} />
                <Stack.Screen name="Cadastro" component={CadastroPaciente} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

