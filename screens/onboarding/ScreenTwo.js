import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ScreenTwo = ({ navigation }) => {
  return (
    <View className="flex-1 bg-zinc-950 justify-center items-center px-4">
      <Text className="text-white text-xl font-bold mb-4">BET SMARTER, NOT HARDER</Text>
      <Text className="text-gray-300 mb-8">Discover Your Parlay's Strengths and Weaknesses Instantly</Text>
      <TouchableOpacity
        className="mb-4 bg-blue-500 py-2 px-4 rounded-full"
        onPress={() => navigation.navigate('ScreenThree')}
      >
        <Text className="text-white">Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenThree')}>
        <Text className="text-gray-300">Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTwo;
