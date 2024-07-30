import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, Alert } from 'react-native';
import { BlurView } from 'expo-blur';

const NewBetModal = ({ isVisible, onClose, onEvaluateBet, navigation }) => {
  const [selectedLeague, setSelectedLeague] = useState('NBA');
  const [selectedType, setSelectedType] = useState('Player O/U');
  const [betInput, setBetInput] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzePOU = async (betQuery) => {
    setLoading(true);
    const NEW_CLOUD_FUNCTION_URL = 'https://analyze-player-over-under-vilhfa3ama-uc.a.run.app';
    const requestData = { prompt: betQuery };
    console.log(JSON.stringify(requestData));
    try {
      const response = await fetch(NEW_CLOUD_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from function:', responseData);
        console.log(responseData.response.defense_data.response.content);

        onEvaluateBet(responseData); // Pass the response data to the parent component
        onClose();
        navigation.navigate('ParlayDetailScreen', { initialBet: responseData });
      } else {
        const errorText = await response.text();
        throw new Error(`Failed to fetch: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Error calling Firebase function:', error);
      Alert.alert('Error', 'An error occurred while evaluating the bet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEvaluateBet = () => {
    if (!betInput.trim()) {
      Alert.alert('Input Error', 'Please enter your bet.');
      return;
    }
    analyzePOU(betInput);
  };

  const LeagueButton = ({ league }) => (
    <TouchableOpacity
      onPress={() => setSelectedLeague(league)}
      style={[styles.typeButton, selectedLeague === league ? styles.activeType : styles.inactive]}
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
      <BlurView tint="dark" intensity={50} style={styles.blurView}>
        <TouchableOpacity style={styles.closeTouchable} activeOpacity={1} onPressOut={onClose} />
      </BlurView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>

            <Text style={styles.header}>LEAGUE</Text>
            <View style={styles.buttonRow}>
              <LeagueButton league="NFL" />
              <LeagueButton league="NBA" />
              <LeagueButton league="WNBA" />
              <LeagueButton league="MLB" />
            </View>

            <Text style={styles.header}>TYPE</Text>
            <View style={styles.buttonRow}>
              <TypeButton type="Player O/U" />
              <TypeButton type="Team O/U" />
              <TypeButton type="Moneyline" />
            </View>

            <Text style={styles.header}>INPUT YOUR BET</Text>
            <TextInput
              style={styles.input}
              placeholder="Type Here..."
              placeholderTextColor="#d3d3d3"
              value={betInput}
              onChangeText={setBetInput}
              multiline={true}
            />

            <TouchableOpacity onPress={handleEvaluateBet} style={styles.evaluateButton} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.evaluateButtonText}>Evaluate Bet</Text>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurView: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
  closeTouchable: { flex: 1 },
  keyboardAvoidingView: { flex: 1, justifyContent: 'flex-end' },
  scrollViewContent: { flexGrow: 1, justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#1a1a1a', borderRadius: 30, padding: 16, marginBottom: Platform.OS === 'ios' ? 0 : 20 },
  closeButton: { alignSelf: 'flex-end', marginBottom: 12 },
  closeButtonText: { color: '#b3b3b3', fontSize: 24, fontWeight: 'bold' },
  header: { color: '#b3b3b3', fontSize: 18, fontWeight: 'bold', marginTop: 8, marginBottom: 8 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  typeButton: { margin: 4, padding: 8, borderRadius: 50 },
  buttonText: { color: 'white', fontSize: 14 },
  activeType: { backgroundColor: '#007aff' },
  inactive: { backgroundColor: '#333' },
  input: { backgroundColor: '#333', color: 'white', borderRadius: 10, padding: 16, paddingTop: 16, marginBottom: 16, textAlignVertical: 'top' },
  evaluateButton: { backgroundColor: '#007aff', padding: 12, borderRadius: 10, marginTop: 8 },
  evaluateButtonText: { color: 'white', textAlign: 'center', fontSize: 18 },
});

export default NewBetModal;
