import react from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function BotaoInfo(props){
    return(
<View style= {style.Container}>
    <TouchableOpacity style= {style.BotaoInfo}
                      onPress={props.acao}>
        <Text>
            Informações do App
        </Text>
    </TouchableOpacity>
</View>
    )
}
const style = StyleSheet.create({
    BotaoInfo: {
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
export default BotaoInfo;