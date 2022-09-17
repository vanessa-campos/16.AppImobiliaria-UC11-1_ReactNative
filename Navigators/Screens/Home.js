import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { menubar } from '../styles'
import Footer from '../components/Footer'

export default function Home({ navigation }) {

    return (
        <ImageBackground source={require('../images/backgroundHome.png')} 
            imageStyle={{ opacity: 0.6 }} style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>
            <View style={menubar.container}>
                <TouchableOpacity onPress={() => navigation.navigate('ListaAnuncios')} style={menubar.button}>
                    <Image source={require('../images/iconHomeSearch.png')} style={menubar.image} />
                    <Text style={menubar.text}>Anúncios</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CadastroAnuncio')} style={menubar.button}>
                    <Image source={require('../images/iconHomePlus.png')} style={menubar.image} />
                    <Text style={menubar.text}>Novo Anúncio</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </ImageBackground>
    )
}