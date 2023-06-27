import react from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function BotaoSaiba(props){
    return(
<View style= {style.Container}>
    <TouchableOpacity style= {style.BotaoSaiba}
                      onPress={props.acao}>
        <Text>
            Saiba Mais!
        </Text>
    </TouchableOpacity>
</View>
    )
}
const style = StyleSheet.create({
    BotaoSaiba: {
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
export default BotaoSaiba;