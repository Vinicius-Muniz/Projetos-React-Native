import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title  from './src/components/Title/';
import Main from './src/components/Main/';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}></View>
      <View style={styles.title}>
        <Title/>
      </View>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20px',
  },

  topBarContainer: {
    width: '100%',
    height: '3%',
    backgroundColor: '#1d96f2',
  },

  title: {
    width: '100%',
    backgroundColor: '#1d96f2',
    alignSelf: 'flex-start',
    
  },

});

