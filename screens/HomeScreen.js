import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import NewBetModal from '../components/NewBetModal'; // Adjust the import path if necessary

//TODO: Get parlays from SQLite DB
const parlayData = [
  {
    title: 'GSW WINS',
    grade: 'A+',
    description: 'Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...',
    image: require('../assets/images/placeholder.png'), // Make sure you have this placeholder image in your assets
  },
  {
    title: 'LEBRON JAMES',
    grade: 'B-',
    description: 'Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...',
    image: require('../assets/images/placeholder.png'),
  },
  {
    title: 'STEPHEN CURRY',
    grade: 'C-',
    description: 'Pika-pi Thundershock Parasect deserunt mollit Leech Seed...',
    image: require('../assets/images/placeholder.png'),
  },
];


const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="bg-zinc-950 flex-1">
      <ScrollView>
        <View className="px-4 py-10">
          //TODO: name integration
          <Text className="text-white text-2xl font-extrabold my-6">WELCOME, JOHNNY!</Text>
          <Text className="text-gray-300 mb-4">Let's get started on your next bet!</Text>
          
          <Text className="text-blue-500 text-lg font-bold mb-4">EVALUATE PREVIOUS PARLAYS</Text>
          <TextInput
            className="bg-gray-800 text-white rounded-lg px-4 py-2 mb-4"
            placeholder="Search Parlay"
            placeholderTextColor="#d3d3d3"
          />
          {parlayData.map((parlay, index) => (
            <View key={index} className="bg-gray-800 rounded-lg p-4 mb-4 flex-row items-center">
              <Image source={parlay.image} className="h-12 w-12 rounded-full mr-4" />
              <View className="flex-1">
                <Text className="text-white text-lg">{`${parlay.title}: (${parlay.grade})`}</Text>
                <Text className="text-gray-400">{parlay.description}</Text>
              </View>

            </View>
          ))}

        </View>
      </ScrollView>
      <TouchableOpacity 
              onPress={() => setModalVisible(true)}
              className="bg-blue-500 py-3 px-4 rounded-lg items-center m-4 absolute bottom-0 right-0 left-0 z-10"
              >
              <Text className="text-white text-center">New Parlay +</Text>
          </TouchableOpacity>
      <NewBetModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        // You may want to handle the evaluated bet data here or in the modal component
        onEvaluateBet={(betData) => {
          console.log('Bet evaluated:', betData);
          // Perform actions after evaluating the bet, such as updating state
          // Then close the modal
          setModalVisible(false);
        }
      }
      navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;


