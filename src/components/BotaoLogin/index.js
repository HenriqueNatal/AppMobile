import react from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function BotaoLogin(props){
    return(
<View style= {style.Container}>
    <TouchableOpacity style= {style.BotaoLogin}
                      onPress={props.acao}>
        <Text>
            Entrar
        </Text>
    </TouchableOpacity>
</View>
    )
}
const style = StyleSheet.create({
    BotaoLogin: {
        alignItems: 'center',
        backgroundColor: '#939',
        padding: 10,
        width: 150,
        fontSize: 30,
        borderRadius: 5,
        marginTop: 35,
        fontWeight: '600',
    }
})
export default BotaoLogin;