import React, { Component, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Alert, ScrollView } from 'react-native';
import { form, cam } from '../styles';
import { Icon } from 'react-native-elements'
import { RNCamera } from 'react-native-camera'
import Database from '../database/Database'
import Anuncio from '../models/Anuncio'
import Footer from '../components/Footer'

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Titulo: "", Endereco: "", Finalidade: "", Tipo: "", Valor: "", Imagem: "", listaAnuncios: []
        }
    }

    CadastrarAnuncio = (Titulo, Endereco, Finalidade, Tipo, Valor, Imagem) => {
        const novoAnuncio = new Anuncio(Titulo, Endereco, Finalidade, Tipo, Valor, Imagem)
        const banco = new Database()
        banco.InserirAnuncio(novoAnuncio)
        banco.ListarAnuncios().then(lista => { this.setState({ listaAnuncios: lista }) })
    }

    ListarProdutos = () => {
        const banco = new Database()
        banco.ListarAnuncios().then(lista => { this.setState({ listaAnuncios: lista }) })
    }

    TirarFoto = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true }
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri)
            this.setState({ Imagem: data.uri })
            console.log("Salva a imagem " + this.state.Imagem)
        }
    }

    render() {
        return (
            <View style={form.container2}>

                <ScrollView showsVerticalScrollIndicator>
                    <TextInput style={form.input} placeholder="Título do Anúncio"
                        onChangeText={(valor) => { this.setState({ Titulo: valor }) }} />
                    <TextInput style={form.input} placeholder="Endereço"
                        onChangeText={(valor) => { this.setState({ Endereco: valor }) }} />
                    <TextInput style={form.input} placeholder="Finalidade (Aluguel/Venda)"
                        onChangeText={(valor) => { this.setState({ Finalidade: valor }) }} />
                    <TextInput style={form.input} placeholder="Tipo (Casa/Apartamento/Comércio)"
                        onChangeText={(valor) => { this.setState({ Tipo: valor }) }} />
                    <TextInput style={form.input} placeholder=" Valor (R$)"
                        onChangeText={(valor) => { this.setState({ Valor: valor }) }} />

                    <View style={form.container3}>
                        <Text style={{ fontSize: 14, color: '#999' }}>Imagem</Text>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={cam.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: 'Permission to use camera',
                                message: 'We need your permission to use your camera',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permission to use audio recording',
                                message: 'We need your permission to use your audio',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                console.log(barcodes);
                            }}
                        />
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.TirarFoto()} style={cam.capture}>
                                <Text style={{ fontSize: 12 }}> CAPTURAR </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={form.container4}>
                        <TouchableOpacity style={form.button}
                            onPress={() => {
                                this.CadastrarAnuncio(this.state.Titulo, this.state.Endereco, this.state.Finalidade, this.state.Tipo, this.state.Valor, this.state.Imagem),
                                    Alert.alert(
                                        "Cadastro realizado com sucesso!",
                                        "Volte para página inicial",
                                        [
                                            { text: "OK", onPress: () => console.log("OK Pressed") }
                                        ]
                                    )
                            }}>
                            <Text style={form.text}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default function CadastroAnuncio({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <View style={form.container1}>
                <View style={form.containerTitle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={form.icon}>
                        <Icon name='arrow-back' color='gray' />
                    </TouchableOpacity>
                    <Text style={form.title}>NOVO ANÚNCIO</Text>
                </View>
                <Cadastro
                />
            </View>
            <Footer />
        </View>
    )
}