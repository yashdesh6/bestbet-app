import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import dummyData from "../../dummy.json";

const BetDetailScreen = () => {
  const betData = {
    image: require("../../assets/images/placeholder.png"),
  };

  const threshold = 15;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={betData.image} style={styles.image} />
        <Text style={styles.title}>{dummyData.player_name}</Text>
        <Text style={styles.description}>{dummyData.player_description}</Text>

        <View style={styles.betContainer}>
          <Text style={styles.sectionHeader}>YOUR BET</Text>
          <Text style={styles.text}>{dummyData.user_bet}.</Text>
          <Text style={styles.strength}>{`STRENGTH: ${dummyData.bet_rating}`}</Text>
        </View>

        <View style={styles.suggestionContainer}>
          <Text style={styles.sectionHeader}>WE SUGGEST</Text>
          <Text style={styles.text}>{dummyData.suggestion}</Text>
        </View>

        <Text style={styles.infoHeader}>INFO</Text>
        <Text style={styles.factsHeader}>FACTS</Text>
        {dummyData.player_facts.map((fact, index) => (
          <View style={styles.factContainer} key={index}>
            <Text style={styles.factText}>{fact}</Text>
          </View>
        ))}
        <Text style={styles.statisticsHeader}>STATISTICS</Text>
        <View style={styles.statisticsContainer}>
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
        <View style={styles.learnMoreContainer}>
          <Text style={styles.learnMoreText}>Learn More About The Opposing Team</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a', // Equivalent to bg-zinc-950
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    alignItems: 'center',
  },
  image: {
    height: 96,
    width: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  title: {
    color: '#007aff', // Equivalent to text-blue-500
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
  },
  betContainer: {
    width: '100%',
    backgroundColor: '#333', // Equivalent to bg-gray-700
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginBottom: 16,
  },
  strength: {
    color: '#32cd32', // Equivalent to text-green-500
    fontWeight: 'bold',
  },
  suggestionContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 16,
  },
  infoHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 16,
  },
  factsHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  factContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  factText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statisticsHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statisticsContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  learnMoreContainer: {
    width: '100%',
    backgroundColor: '#007aff', // Equivalent to bg-blue-700
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  learnMoreText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BetDetailScreen;
