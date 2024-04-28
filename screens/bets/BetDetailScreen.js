import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import dummyData from "../../dummy.json";

const BetDetailScreen = () => {
  const betData = {
    image: require("../../assets/images/placeholder.png"), // Update with the correct path to your image
  };

  const threshold = 15;

  return (
    <ScrollView className="bg-zinc-950 flex-1">
      <View className="px-4 py-10 items-center">
        <Image source={betData.image} className="h-24 w-24 rounded-full mb-4" />
        <Text className="text-white text-3xl font-bold mb-2">
          {dummyData.player_name}
        </Text>
        <Text className="text-white text-lg mb-4">
          {dummyData.player_description}
        </Text>

        <View className="w-full bg-gray-700 rounded-lg p-4 mb-6">
          <Text className="text-lg font-bold mb-2 text-white">YOUR BET</Text>
          <Text className="text-base mb-4 text-white">
            {dummyData.user_bet}.
          </Text>
          <Text className="text-green-500 font-bold">
            STRENGTH: {dummyData.bet_rating}
          </Text>
        </View>

        <View className="w-full bg-gray-700 rounded-lg p-4">
          <Text className="text-lg font-bold mb-2 text-white">WE SUGGEST</Text>
          <Text className="text-base text-white">{dummyData.suggestion}</Text>
        </View>

        <Text className="text-white text-xl font-bold mt-10 mb-4">INFO</Text>
        <Text className="text-white text-l font-bold mb-4">FACTS</Text>
        {dummyData.player_facts.map((fact, index) => (
          <View className="w-full bg-gray-700 rounded-lg p-4 mb-4" key={index}>
            <Text className="text-white text-l font-bold mb-4">{fact}</Text>
          </View>
        ))}
        <Text className="text-white text-l font-bold mb-4">STATISTICS</Text>
        <View className="w-full bg-gray-700 rounded-lg p-4 mb-4">
          <BarChart
            barWidth={22}
            noOfSections={dummyData.graph_struct.data.length}
            barBorderRadius={4}
            frontColor="lightgray"
            data={dummyData.graph_struct.data}
            yAxisThickness={0}
            xAxisThickness={0}
            hideRules
            showReferenceLine1
            referenceLine1Position={threshold}
            referenceLine1Config={{
              color: "blue",
              dashWidth: 2,
              dashGap: 3,
              thickness: 3,
            }}
          />
        </View>
        <View className="w-full bg-blue-700 rounded-lg p-4 mb-4">
          <Text className="text-white text-xl font-bold">
            Learn More About The Opposing Team
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BetDetailScreen;
