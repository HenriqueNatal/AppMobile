import react from "react";
import {View, StyleSheet, Text} from 'react-native';
import BotaoHome from "../../components/BotaoHome";

 function Home({navigation}){
    const continuar = () =>{
     
        navigation.navigate('Descarte');
    }

    return(
        <View style= {style.boxHome}>
            <Text style= {style.tituloHome}>
                Sou um App informativo sobre {'\n'}
                 Tecnologia e Sustentabilidade!
            </Text>
            <Text style= {style.infoHome}>
            É importante para as organizações se manterem atentas à TI verde,
            pois o setor tecnológico já é conhecido por causar danos ambientais,
            então, essas práticas devem 
            acometer principalmente as empresas que  o foco do processo é a produção de TI. {'\n'}
            TI Verde refere-se ao conjunto de ações e táticas de um uso consciente e ambientalmente 
            responsável de computadores e recursos de TI no ambiente de trabalho.
            Em outras palavras, a TI Verde é o estudo, engenharia, fabricação, uso e descarte de dispositivos
            de tecnologias e dispositivos de computação de forma a reduzir seu impacto ambiental.
            Hoje, não é segredo que tudo que envolve a computação consome muitos recursos naturais: das matérias-primas
            necessárias para fabricá-los até a energia usada para operá-los — sem esquecer os problemas para descartá-los.
            </Text>
            <BotaoHome acao= {continuar}>
            </BotaoHome>
        </View>
    )
}

const style = StyleSheet.create({
    boxHome:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ffff',
    },
    tituloHome:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    infoHome: {
        fontSize: 13,
        marginLeft: 4
    }
})

export default Home;