import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { itemLista } from '../styles/index';

export default class ItemAnuncio extends Component {

    render() {
        return (
            <View style={itemLista.container2}>
                <View style={itemLista.container3}>
                    <View style={itemLista.image}>
                        <Image style={itemLista.image} source={{ uri: this.props.Imagem }} />
                    </View>
                    <View style={itemLista.container4}>
                        <Text style={itemLista.text}>{this.props.id} - {this.props.Titulo}</Text>
                        <Text style={itemLista.text2}>Endereço: <Text style={itemLista.text}>{this.props.Endereco}</Text></Text>
                        <Text style={itemLista.text}>{this.props.Finalidade} - {this.props.Tipo}</Text>
                        <Text style={itemLista.text2}>Valor: <Text style={itemLista.text}> R${this.props.Valor}</Text></Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { this.props.deletar(this.props.id) }}>
                    <Image source={require('../images/iconTrash.png')} style={itemLista.icon} />
                </TouchableOpacity>
            </View>
        )
    }
}
