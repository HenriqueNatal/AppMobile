import react from "react";
import { View, Text, StyleSheet } from "react-native";
import BotaoInfo from "../../components/BotaoInfo";

function Saiba({navigation}){
    const info = () =>{
     
        navigation.navigate('Info');
    }

    return(
        <View style= {style.boxSaiba}>
            <Text style= {style.tituloSaiba}>
                Caso tenha interesse no assunto {'\n'}
                Aqui vai uma dica de onde obter mais informações!
            </Text>
            <Text style= {style.infoSaiba}>
                Uma dica valiosa de onde encontrar todas a informações que busca acerca do assunto de Tecnologia e Sustentabilidade,
                é o site "Green Eletron", lá você pode verificar informações e aprender bastante! {'\n'} {'\n'}
                Acessando por meio deste endereço web: https://greeneletron.org.br/blog/tudo-o-que-voce-precisa-saber-sobre-o-lixo-eletronico/
            </Text>
            <BotaoInfo
            acao= {info}
            ></BotaoInfo>
        </View>
    )
}

const style = StyleSheet.create({
    boxSaiba:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ffff',
    },
    tituloSaiba:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    infoSaiba: {
        fontSize: 13,
        marginLeft: 4
    }

})
export default Saiba;