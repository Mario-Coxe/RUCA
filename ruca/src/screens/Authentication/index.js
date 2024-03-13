import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import style from './style'

import {PRIMARY, SECUNDARY} from '../../styles/global/index.js';





export default function Authentication() {
    return (
        <View style={style.container}>
            <ImageBackground source={require('../../../assets/images/bannerAbast.jpg')} resizeMode='cover'  style={style.imageBackground}>
                <View style={style.content}>
                    <View style={style.containertitleContent}>
                        <Text style={style.logo}>Abasteça</Text>
                        <Text style={style.titleContent}>Seja Bem Vindo/a</Text>
                        <Text style={style.descriptionContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={style.containerBtn}>
                        <Buttons name={"Entrar"} backgroundColor={SECUNDARY} textColor={PRIMARY}/>

                        <Buttons name={"Registrar"} backgroundColor={"rgba(0, 0, 0, 0.1)"} textColor={PRIMARY} isBorderColor={true} borderColor={"#ffff"}/>
                    </View>
                    
                </View>
            </ImageBackground>
        </View>
    )
}
