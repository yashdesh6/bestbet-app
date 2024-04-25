import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

const NewBetModal = ({ isVisible, onClose, onEvaluateBet, navigation}) => {
  const [selectedLeague, setSelectedLeague] = useState('NBA');
  const [selectedType, setSelectedType] = useState('Player O/U');
  const [betInput, setBetInput] = useState('');


  const LeagueButton = ({ league }) => (
    <TouchableOpacity
      onPress={() => setSelectedLeague(league)}
      className={`m-1 p-2 ${selectedLeague === league ? 'bg-blue-600' : 'bg-gray-700'} rounded-full`}
    >
      <Text className="text-white text-sm">{league}</Text>
    </TouchableOpacity>
  );

  const TypeButton = ({ type }) => (
    <TouchableOpacity
      onPress={() => setSelectedType(type)}
      className={`m-1 p-2 ${selectedType === type ? 'bg-blue-600' : 'bg-gray-700'} rounded-full`}
    >
      <Text className="text-white text-sm">{type}</Text>
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
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={onClose}
        />
      </BlurView>

      <View className="absolute bottom-0 w-full px-4 pb-4">
        <View className="bg-zinc-950 rounded-3xl p-4">
          <TouchableOpacity className="mb-4 self-end" onPress={onClose}>
            <Text className="text-gray-300 font-extrabold">x</Text>
          </TouchableOpacity>
          <Text className="text-gray-300 text-lg font-bold mb-2">LEAGUE</Text>
          <View className="flex-row justify-around flex-wrap">
            <LeagueButton league="NFL" />
            <LeagueButton league="NBA" />
            <LeagueButton league="WNBA" />
            <LeagueButton league="MLB" />
          </View>

          <Text className="text-gray-300 text-lg font-bold mt-4 mb-2">TYPE</Text>
          <View className="flex-row justify-around flex-wrap">
            <TypeButton type="Player O/U" />
            <TypeButton type="Team O/U" />
            <TypeButton type="Moneyline" />
          </View>

          <Text className="text-gray-300 text-lg font-bold mt-4 mb-2">INPUT FIRST BET</Text>
          <TextInput
            className="bg-gray-800 text-white rounded-lg p-4"
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
            className="bg-blue-500 p-3 rounded-lg mt-4"
          >
            <Text className="text-white text-center">Evaluate Bet</Text>
          </TouchableOpacity>
        </View>
        </View>
    
    </Modal>
  );
};

export default NewBetModal;
