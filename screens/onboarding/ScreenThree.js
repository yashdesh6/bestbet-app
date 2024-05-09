import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenThree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>STEP INTO THE WINNER'S CIRCLE</Text>
      <Text style={styles.subHeader}>Upgrade Now for Exclusive AI Insights on Every Bet</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Equivalent to bg-zinc-950
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    color: '#b3b3b3', // Equivalent to text-gray-300
    marginBottom: 32,
  },
  button: {
    marginBottom: 16,
    backgroundColor: '#007aff', // Close approximation for bg-blue-500
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
  }
});

export default ScreenThree;
