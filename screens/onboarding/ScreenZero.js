import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ScreenZero() {
  return (
    <View style={styles.container}>
    <View style={styles.screen}>
      <Text>
        <Text style={styles.title}>Best</Text>
        <Text style={styles.title}>Bet</Text>
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 430,
    height: 932,
    backgroundColor: '#151719',
  },
  screen: {
    position: 'absolute',
    width: 430,
    height: 1240,
    left: 1,
    top: 1240,
    background: 'radial-gradient(76.87% 76.87% at 50% 23.13%, #00588F 0%, rgba(0, 91, 148, 0) 100%)',
    transform: [{ matrix: [1, 0, 0, -1, 0, 0] }],
  },
  title: {
    position: 'absolute',
    width: 319,
    height: 100,
    left: 'calc(50% - 159.5px)',
    top: 'calc(50% - 50px)',
    fontFamily: 'JetBrains Mono',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 76, // Adjusted size as per React Native's fontSize
    lineHeight: 100,
    color: '#009AFA',
  },
});

export default ScreenZero;




