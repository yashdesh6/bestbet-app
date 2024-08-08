import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles/NewBetScreenStyles";
import { insertBet } from '../../dbOperations'; // Adjust the path if necessary


const NewBetScreen = ({ navigation }) => {
  const [selectedLeague, setSelectedLeague] = useState("NBA");
  const [selectedType, setSelectedType] = useState("Player O/U");
  const [betInput, setBetInput] = useState("");

  const leagues = ["NFL", "NBA", "WNBA", "MLB"];

  const LeagueButton = ({ league }) => (
    <TouchableOpacity
      onPress={() => setSelectedLeague(league)}
      style={[
        styles.leagueButton,
        selectedLeague === league ? styles.active : styles.inactive,
      ]}
    >
      <Text style={styles.buttonText}>{league}</Text>
    </TouchableOpacity>
  );

  const TypeButton = ({ type }) => (
    <TouchableOpacity
      onPress={() => setSelectedType(type)}
      style={[
        styles.typeButton,
        selectedType === type ? styles.active : styles.inactive,
      ]}
    >
      <Text style={styles.buttonText}>{type}</Text>
    </TouchableOpacity>
  );

  const handleEvaluateBet = () => {
    // Typically, you'd handle the bet input here, for this example, navigating as a placeholder
    navigation.navigate("ParlayDetailScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>LEAGUE</Text>
        <View style={styles.row}>
          {leagues.map((league, index) => {
            return <LeagueButton league={league} key={index} />;
          })}
        </View>

        <Text style={styles.headerText}>TYPE</Text>
        <View style={styles.row}>
          <TypeButton type="Player O/U" />
          <TypeButton type="Team O/U" />
          <TypeButton type="Moneyline" />
        </View>

        <Text style={styles.headerText}>INPUT FIRST BET</Text>
        <TextInput
          style={styles.input}
          placeholder="Type Here..."
          placeholderTextColor="#d3d3d3"
          value={betInput}
          onChangeText={setBetInput}
          multiline={true}
        />

        <TouchableOpacity
          onPress={handleEvaluateBet}
          style={styles.evaluateButton}
        >
          <Text style={styles.buttonText}>Evaluate Bet ↓</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewBetScreen;
