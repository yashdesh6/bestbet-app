// not being used, its here for reference

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const NewBetScreen = ({ navigation }) => {
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

  const handleEvaluateBet = () => {
    // Here you'd typically do something with the bet input, like sending it to your backend.
    // For now, we'll navigate to the ParlayDetailScreen with the assumption that the bet has been evaluated.
    navigation.navigate('ParlayDetailScreen');
  };

  return (
    <ScrollView className="bg-zinc-950 flex-1">
      <View className="p-4">
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
            onPress={() => navigation.navigate('ParlayDetailScreen')}
        className="bg-blue-500 p-3 rounded-lg mt-4"
        >
          <Text className="text-white text-center">Evaluate Bet ↓</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewBetScreen;
