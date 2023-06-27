import react from "react";
import { View, Text, StyleSheet } from "react-native";

function Info(){

    return(
        <View style= {style.boxInfo}>
            <Text style= {style.infor}>
                Todos os direitos reservados. {'\n'}
                Desenvolvedor: Henrique Natal Miguel.{'\n'}
                Aplicativo desenvolvido com o objetivo de informar e levar conhecimento
                ao público em geral, mesclando a tecnlogia e a sustentabilidade!{'\n'}
                Informações obtidas por meio de pesquisa e consultas á internet.
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    boxInfo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ffff',
    },
    infor: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 4
    }

})

export default Info;