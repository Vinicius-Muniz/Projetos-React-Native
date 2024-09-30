import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Title(){
    return(
        <View>
            <Text style={styles.title}>IMC Calculator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#fff',
        alignSelf: 'flex-start',
        padding: 10,
    },
});