import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Screens/Home"
import CadastroAnuncio from './Screens/CadastroAnuncio'
import ListaAnuncios from './Screens/ListaAnuncios'

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
            <Stack.Screen name="ListaAnuncios" component={ListaAnuncios} options={{headerShown: false}}/>           
            <Stack.Screen name="CadastroAnuncio" component={CadastroAnuncio} options={{headerShown: false}}/>   
        </Stack.Navigator>
    )
}