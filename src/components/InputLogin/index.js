import react from "react";
import {SafeAreaView, TextInput, StyleSheet, Text} from 'react-native';

function InputLogin(){

    return(
        <SafeAreaView>
            <TextInput 
            style= {style.Campo}
            placeholder= "exemplo">

            </TextInput>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    Campo: {
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        width: 250,
        fontSize: 15,
        fontWeight: '600',
        borderRadius: 5,


    }
});

export default InputLogin;