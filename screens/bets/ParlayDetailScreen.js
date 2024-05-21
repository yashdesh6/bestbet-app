import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import NewBetModal from "../../components/NewBetModal";
import {
  getStyleForGrade,
  getStyleForStrength,
} from "../../components/functions/getStyleFromGrade";
import styles from "./styles/ParlayDetailsScreenStyles";
import formatJSON from "../../components/functions/formatJSON";
import newDummy from "../../newDummy.json";
import { arrowIcon } from "../../assets/const";
import ImageIcon from "../../components/ImageIcon";

const ParlayDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const overallStrength = "C-";

  const jsonData = formatJSON(newDummy);
  const betData = [
    {
      title: jsonData.playerName,
      grade: jsonData.betRating,
      description: jsonData.userBet,
      playerImage: jsonData.playerImage,
    },
    {
      title: jsonData.playerName,
      grade: jsonData.betRating,
      description: jsonData.userBet,
      playerImage: jsonData.playerImage,
    },
    {
      title: jsonData.playerName,
      grade: jsonData.betRating,
      description: jsonData.userBet,
      playerImage: jsonData.playerImage,
    },
  ];

  const handleEvaluateBet = (betInput) => {
    // Handle bet input evaluation here
    console.log("Evaluating bet:", betInput);
    // Close the modal and possibly navigate
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topSection}>
        <Text style={styles.title}>{betData[0].title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>OVERALL STRENGTH: </Text>
          <Text style={getStyleForGrade(overallStrength)}>
            {overallStrength}
          </Text>
        </View>
        <View style={styles.strengthBar}>
          <View style={getStyleForStrength(overallStrength)} />
        </View>
      </View>
      <View style={styles.midSection}>
        <Text style={styles.sectionHeader}>YOUR EVALUATED BETS</Text>

        <ScrollView>
          {betData.map((bet, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("BetDetailScreen")}
              key={index}
              style={styles.betItem}
            >
              <ImageIcon
                player={{ uri: bet.playerImage }}
                style={styles.image}
              />
              <View style={styles.betText}>
                <View style={styles.betTextContainer}>
                  <Text style={styles.betTitle}>{`${bet.title}: `}</Text>
                  <Text
                    style={getStyleForGrade(bet.grade)}
                  >{`(${bet.grade})`}</Text>
                </View>
                <Text style={styles.betDescription}>{bet.description}</Text>
              </View>
              <Image style={styles.arrowIcon} source={{ uri: arrowIcon }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.newBetButton}
        >
          <Text style={styles.addButtonText}>New Bet +</Text>
        </TouchableOpacity>
        <NewBetModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          onEvaluateBet={handleEvaluateBet}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default ParlayDetailScreen;
