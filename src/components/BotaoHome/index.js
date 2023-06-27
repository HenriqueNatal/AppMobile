import react from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function BotaoHome(props){
    return(
<View style= {style.Container}>
    <TouchableOpacity style= {style.BotaoHome}
                      onPress={props.acao}>
        <Text>
            Continuar!
        </Text>
    </TouchableOpacity>
</View>
    )
}
const style = StyleSheet.create({
    BotaoHome: {
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
export default BotaoHome;