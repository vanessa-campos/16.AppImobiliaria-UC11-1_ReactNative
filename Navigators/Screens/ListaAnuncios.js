import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import { itemLista, form } from '../styles';
import { Icon } from 'react-native-elements'
import Database from '../database/Database'
import ItemAnuncio from '../components/ItemAnuncio';
import Footer from '../components/Footer'

export class Lista extends Component {

    constructor(props) {
        super(props)
        this.state = { listaAnuncios: [] }
        this.ListarAnuncios()
    }

    ListarAnuncios = () => {
        const banco = new Database()
        banco.ListarAnuncios().then(lista => { this.setState({ listaAnuncios: lista }) })
    }

    DeletarAnuncio = (id) => {
        const banco = new Database()
        banco.Deletar(id)
        banco.ListarAnuncios().then(lista => { this.setState({ listaAnuncios: lista }) })
    }

    render() {
        return (
            <View style={itemLista.container1}>
                {/* <FlatList data={this.state.listaAnuncios} renderItem={(item) => ItemAnuncio(item) } /> */}
                <ScrollView>
                    {this.state.listaAnuncios.map(item => (
                        <ItemAnuncio key={item.id} item={item} id={item.id} Titulo={item.Titulo} Endereco={item.Endereco} Finalidade={item.Finalidade} Tipo={item.Tipo} Valor={item.Valor} Imagem={item.Imagem} deletar={this.DeletarAnuncio} />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default function ListaAnuncios({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={form.container1}>
                <View style={form.containerTitle}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={form.icon}>
                        <Icon name='arrow-back' color='gray' />
                    </TouchableOpacity>
                    <Text style={form.title}>ANÚNCIOS</Text>
                </View>
                <Lista />
            </View>
            <Footer />
        </View >
    )
}