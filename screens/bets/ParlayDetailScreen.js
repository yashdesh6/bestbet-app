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
import { arrowIcon, exGradient, exTeam1, exTeam2 } from "../../assets/const";
import ImageIcon from "../../components/ImageIcon";

const ParlayDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const overallStrength = "C-";
  const dim = 64;

  const jsonData = formatJSON(newDummy);
  const betData = [
    {
      title: jsonData.playerName,
      grade: jsonData.betRating,
      description: jsonData.userBet,
      playerImage: jsonData.playerImage,
      gradient: exGradient,
      teamLogo: exTeam1,
    },
    {
      title: jsonData.playerName,
      grade: jsonData.betRating,
      description: jsonData.userBet,
      team1: exTeam1,
      team2: exTeam2
    },
    {
      title: jsonData.playerName,
      grade: jsonData.betRating,
      description: jsonData.userBet,
      playerImage: jsonData.playerImage,
      gradient: exGradient,
      teamLogo: exTeam1,
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
                player={bet.playerImage ? bet.playerImage : null}
                gradient={bet.gradient ? bet.gradient : null}
                teamLogo={bet.teamLogo ? bet.teamLogo : null}
                team1={bet.team1 ? bet.team1 : null}
                team2={bet.team2 ? bet.team2 : null}
                dim={dim}
                style={styles.imageIcon}
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
