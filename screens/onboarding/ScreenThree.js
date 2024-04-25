import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ScreenThree = ({ navigation }) => {
  return (
    <View className="flex-1 bg-zinc-950 justify-center items-center px-4">
      <Text className="text-white text-xl font-bold mb-4">STEP INTO THE WINNER'S CIRCLE</Text>
      <Text className="text-gray-300 mb-8">Upgrade Now for Exclusive AI Insights on Every Bet</Text>
      <TouchableOpacity
        className="mb-4 bg-blue-500 py-2 px-4 rounded-full"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text className="text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenThree;
