import React from 'react'
import { View, Image } from 'react-native'
import { footer } from '../styles'

export default function Footer() {

    return (
        <View>
            <View style={footer.container}>
                <Image source={require('../images/logo.png')} style={footer.image} />
            </View>
        </View>
    )
}
