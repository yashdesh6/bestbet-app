import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import NewBetModal from '../../components/NewBetModal'; // Update the path as needed

const ParlayDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const betData = {
    name: 'STEPHEN CURRY',
    strength: 'C-',
    description: 'Stephen Curry to score over 27.5 points against the Celtics',
    image: require('../../assets/images/placeholder.png'), // Make sure you have this image in your assets
  };

  const handleEvaluateBet = (betInput) => {
    // Handle bet input evaluation
    console.log('Evaluating bet:', betInput);
    // Close the modal
    setModalVisible(false);
    // Optionally navigate to another screen with the result
    // navigation.navigate('SomeResultScreen', { betResult: result });
  };

  return (
    <View className="flex-1 bg-zinc-950">
      <ScrollView>
        <View className="px-4 py-10">
          <Text className="text-white text-2xl font-bold mb-2">{betData.name}</Text>
          <Text className="text-white text-lg mb-4">OVERALL STRENGTH: {betData.strength}</Text>
          
          <View className="h-2 bg-gray-700 rounded-full overflow-hidden my-4">
            <View className="h-full w-1/3 bg-red-600" />
          </View>

          <Text className="text-blue-500 text-lg font-bold mb-4">YOUR EVALUATED BETS</Text>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('BetDetailScreen', { bet: betData })}
            className="flex-row items-center p-4 bg-gray-800 rounded-lg mb-6"
          >
            <Image source={betData.image} className="h-12 w-12 rounded-full mr-4" />
            <View className="flex-1">
              <Text className="text-white font-bold">{betData.name}</Text>
              <Text className="text-red-500">{betData.strength}</Text>
              <Text className="text-gray-400">{betData.description}</Text>
            </View>
            <Text className="text-blue-500 text-xl">{'>'}</Text>
          </TouchableOpacity>
          

        </View>
      </ScrollView>
          <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            className="bg-blue-500 py-3 px-4 rounded-lg items-center m-4 absolute bottom-0 right-0 left-0 z-10"
          >
            <Text className="text-white text-center text-lg">Add Bet +</Text>
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

export default ParlayDetailScreen;
