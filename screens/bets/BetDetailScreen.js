import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const BetDetailScreen = () => {
  const betData = {
    name: 'STEPHEN CURRY',
    strength: 'A+',
    description: 'Stephen Curry to score over 27.5 points against the Heat',
    image: require('../../assets/images/placeholder.png'), // Update with the correct path to your image
  };

  return (
    <ScrollView className="bg-zinc-950 flex-1">
      <View className="px-4 py-10 items-center">
        <Image source={betData.image} className="h-24 w-24 rounded-full mb-4" />
        <Text className="text-white text-3xl font-bold mb-2">{betData.name}</Text>
        <Text className="text-white text-lg mb-4">Point guard for the Golden State Warriors</Text>

        <View className="w-full bg-gray-700 rounded-lg p-4 mb-6">
          <Text className="text-lg font-bold mb-2 text-white">YOUR BET</Text>
          <Text className="text-base mb-4 text-white">{betData.description}.</Text>
          <Text className="text-green-500 font-bold">STRENGTH: {betData.strength}</Text>
        </View>

        <View className="w-full bg-gray-700 rounded-lg p-4">
          <Text className="text-lg font-bold mb-2 text-white">WE SUGGEST</Text>
          <Text className="text-base text-white">
            With the analysis showing the Heat in strong form and with significant advantages, the risk-to-reward ratio looks favorable
          </Text>
        </View>

        <Text className="text-white text-xl font-bold mt-10 mb-4">INFO</Text>
        <Text className="text-white text-xl font-bold mb-4">STATISTICS</Text>
        <Text className="text-white text-xl font-bold">Learn More About The Opposing Team</Text>
      </View>
    </ScrollView>
  );
};

export default BetDetailScreen;
