import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const NewBetModal = ({ isVisible, onClose, onEvaluateBet, navigation }) => {
  const [selectedLeague, setSelectedLeague] = useState('NBA');
  const [selectedType, setSelectedType] = useState('Player O/U');
  const [betInput, setBetInput] = useState('');

  const leagues = ['NFL', 'NBA', 'WNBA', 'MLB'];

  const LeagueButton = ({ league }) => (
    <TouchableOpacity
      onPress={() => setSelectedLeague(league)}
      style={[styles.leagueButton, selectedLeague === league ? styles.activeLeague : styles.inactive]}
    >
      <Text style={styles.buttonText}>{league}</Text>
    </TouchableOpacity>
  );

  const TypeButton = ({ type }) => (
    <TouchableOpacity
      onPress={() => setSelectedType(type)}
      style={[styles.typeButton, selectedType === type ? styles.activeType : styles.inactive]}
    >
      <Text style={styles.buttonText}>{type}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <BlurView
        tint="dark"
        intensity={50}
        style={styles.blurView}
      >
        <TouchableOpacity
          style={styles.closeTouchable}
          activeOpacity={1}
          onPressOut={onClose}
        />
      </BlurView>

      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>x</Text>
        </TouchableOpacity>
        <Text style={styles.header}>LEAGUE</Text>
        <View style={styles.buttonRow}>
          {leagues.map((league, index) => {
            return <LeagueButton league={league} key={index}/>
          })}
        </View>

        <Text style={styles.header}>TYPE</Text>
        <View style={styles.buttonRow}>
          <TypeButton type="Player O/U" />
          <TypeButton type="Team O/U" />
          <TypeButton type="Moneyline" />
        </View>

        <Text style={styles.header}>INPUT FIRST BET</Text>
        <TextInput
          style={styles.input}
          placeholder="Type Here..."
          placeholderTextColor="#d3d3d3"
          value={betInput}
          onChangeText={setBetInput}
          multiline={true}
        />

        <TouchableOpacity 
          onPress={() => {
            navigation.navigate('ParlayDetailScreen');
            onClose();
          }}
          style={styles.evaluateButton}
        >
          <Text style={styles.evaluateButtonText}>Evaluate Bet</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  closeTouchable: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 30,
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  closeButton: {
    alignSelf: 'end',
    marginBottom: 12,
  },
  closeButtonText: {
    color: '#b3b3b3',
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    color: '#b3b3b3',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'around',
    flexWrap: 'wrap',
  },
  leagueButton: {
    margin: 4,
    padding: 8,
    borderRadius: 50,
  },
  typeButton: {
    margin: 4,
    padding: 8,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  activeLeague: {
    backgroundColor: '#007aff', // Equivalent to bg-blue-600
  },
  activeType: {
    backgroundColor: '#007aff', // Equivalent to bg-blue-600
  },
  inactive: {
    backgroundColor: '#333', // Equivalent to bg-gray-700
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  evaluateButton: {
    backgroundColor: '#007aff',
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  evaluateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default NewBetModal;
