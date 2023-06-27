import react from "react";
import { View, Text, StyleSheet} from 'react-native';
import BotaoSaiba from "../../components/BotaoSaiba";

function Descarte({navigation}){
    const saiba = () =>{
     
        navigation.navigate('Saiba');
    }


    return(
        <View style= {style.boxDescarte}>
            <Text style= {style.tituloDescarte}>
                Seguem aqui algumas dicas sobre o {'\n'}
                Descarte adequado do lixo eletrônco!
            </Text>
            <Text style= {style.infoDescarte}>
            Na maioria das vezes esses produtos são jogados no lixo comum ou
             ficam esquecidos em alguma parte da casa, porém eles podem ser reciclados,
              ou seja, podem ser transformados em outras matérias-primas em vez de ser colocados em aterros sanitários.{'\n'}
              Uma das vantagens do processo de reutilização é que diminui-se a extração desses elementos da natureza, economizando recursos.
               O processo de extração de matéria-prima a partir de eletroeletrônicos sem uso é chamado de mineração urbana.{'\n'}
               Algumas categorias são utilizadas para delimitar os tipos de lixo eletrônico. Essa divisão é feita porque os equipamentos têm configurações de tamanho,
                manuseio e aplicação diferentes. As categorias são:{'\n'}{'\n'}
                Grandes equipamentos: geladeiras, freezers, máquinas de lavar, fogões, ar condicionados, microondas, grandes TVs, etc.{'\n'}{'\n'}
                Pequenos equipamentos e eletroportáteis: torradeiras, batedeiras, aspiradores de pó, ventiladores, mixers, secadores de cabelo, ferramentas elétricas, calculadoras, câmeras digitais, rádios, etc.{'\n'}
                Equipamentos de informática e telefonia: computadores, tablets, notebooks, celulares, impressoras, monitores e outros.{'\n'}{'\n'}
                Pilhas e baterias portáteis: pilhas modelos AA, AAA, C/D, recarregáveis, baterias portáteis de 9 V, etc.
            </Text>
            <BotaoSaiba
            acao= {saiba}></BotaoSaiba>
        </View>
    )
}
const style = StyleSheet.create({
    boxDescarte:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ffff',
    },
    tituloDescarte:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    infoDescarte: {
        fontSize: 13,
        marginLeft: 4
    }
})

export default Descarte;