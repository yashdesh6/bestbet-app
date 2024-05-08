import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import NewBetModal from '../../components/NewBetModal'; // Adjust the path as needed

const ParlayDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const betData = {
    name: 'STEPHEN CURRY',
    strength: 'C-',
    description: 'Stephen Curry to score over 27.5 points against the Celtics',
    image: require('../../assets/images/placeholder.png'), // Ensure the image path is correct
  };

  const handleEvaluateBet = (betInput) => {
    // Handle bet input evaluation here
    console.log('Evaluating bet:', betInput);
    // Close the modal and possibly navigate
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{betData.name}</Text>
          <Text style={styles.subtitle}>OVERALL STRENGTH: {betData.strength}</Text>
          
          <View style={styles.strengthBar}>
            <View style={styles.strengthIndicator} />
          </View>

          <Text style={styles.sectionHeader}>YOUR EVALUATED BETS</Text>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('BetDetailScreen', { bet: betData })}
            style={styles.betContainer}
          >
            <Image source={betData.image} style={styles.betImage} />
            <View style={styles.betDetails}>
              <Text style={styles.betName}>{betData.name}</Text>
              <Text style={styles.betStrength}>{betData.strength}</Text>
              <Text style={styles.betDescription}>{betData.description}</Text>
            </View>
            <Text style={styles.betNavigate}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Add Bet +</Text>
      </TouchableOpacity>
      <NewBetModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onEvaluateBet={handleEvaluateBet}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Equivalent to bg-zinc-950
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
  },
  strengthBar: {
    height: 4,
    backgroundColor: '#333', // Equivalent to bg-gray-700
    borderRadius: 2,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 16,
  },
  strengthIndicator: {
    height: '100%',
    width: '33%', // Example percentage
    backgroundColor: '#dc143c', // Equivalent to bg-red-600
  },
  sectionHeader: {
    color: '#007aff', // Equivalent to text-blue-500
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  betContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', // Equivalent to bg-gray-800
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    width: '100%',
  },
  betImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  betDetails: {
    flex: 1,
  },
  betName: {
    color: 'white',
    fontWeight: 'bold',
  },
  betStrength: {
    color: '#dc143c', // Equivalent to text-red-500
  },
  betDescription: {
    color: '#b3b3b3', // Equivalent to text-gray-400
  },
  betNavigate: {
    color: '#007aff', // Equivalent to text-blue-500
    fontSize: 24,
  },
  addButton: {
    backgroundColor: '#007aff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    margin: 16,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ParlayDetailScreen;