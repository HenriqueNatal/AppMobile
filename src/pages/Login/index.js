import React from "react";
import {Text, StyleSheet, View} from "react-native";
import InputLogin from "../../components/InputLogin";
import BotaoLogin from "../../components/BotaoLogin";

function Login({navigation}){

    const logar = () =>{
     
        navigation.navigate('Home');
    }
return (
    <View style= {style.boxLogin}>
        <Text style= {style.titulo}>Bem Vindo! Digite seu nome:</Text>
        <InputLogin></InputLogin>
        <BotaoLogin
            acao={logar}>

        </BotaoLogin>
    </View>
);
}

const style = StyleSheet.create({
boxLogin:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffff',
    },
titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    }
});

export default Login;