import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ResultIMC(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.result}>Resultado:</Text>
            <View style={styles.resultBlock}>
                <Text style={styles.text}>{props.messageResultIMC}</Text>
                <Text style={styles.text}>{props.resultIMC}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    result: {
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 20,
    },

    resultBlock: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    text: {
        fontSize: 18,
    }
});