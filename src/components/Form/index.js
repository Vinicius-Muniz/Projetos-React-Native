import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import ResultIMC from './ResultIMC';

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validationIMC() {
        if(height != null && weight != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("Seu IMC é igual a: ");
            setTextButton("Calcular novamente");
            Keyboard.dismiss();
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageIMC("Preencha o peso e altura");
        Keyboard.dismiss();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Preencha os espaços abaixo com seu peso e altura:</Text>
            <View style={styles.inputBlock}>
                <View style={styles.inputRow}>
                    <Text style={styles.text}>Altura:</Text>
                    <TextInput  
                        onChangeText={setHeight} 
                        value={height} 
                        placeholder="Ex. 1.75" 
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.text}>Peso:</Text>
                    <TextInput 
                        onChangeText={setWeight} 
                        value={weight} 
                        placeholder="Ex. 71.125" 
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => validationIMC()} style={styles.button}>
                <Text style={styles.buttonText}>{textButton}</Text>
            </TouchableOpacity>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItens: 'center',
        width: '80%',
    },

    inputBlock: {
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 20,
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 40,
    },

    inputRow: {
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center',
    },

    text: {
        fontSize: 18,
        marginRight: 10,
        alignSelf: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        width: 100, 
        paddingHorizontal: 10,
        borderRadius: 20,
    },

    button: {
        backgroundColor: '#1d96f2',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});