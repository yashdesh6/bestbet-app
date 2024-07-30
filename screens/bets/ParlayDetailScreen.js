import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import NewBetModal from "../../components/NewBetModal";
import {
  getStyleForGrade,
  getStyleForStrength,
} from "../../components/functions/getStyleFromGrade";
import styles from "./styles/ParlayDetailsScreenStyles";
import formatJSON from "../../components/functions/formatJSON";
import { arrowIcon } from "../../assets/const";
import ImageIcon from "../../components/ImageIcon";

const ParlayDetailScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dim = 64;

  // const jsonData = formatJSON(dummyData);
  const jsonData = formatJSON(route.params.initialBet);

  const overallStrength = jsonData.betRating;

  // console.log("#########JSON Data: ");
  // console.log(jsonData);

  const betData = [
    {
      playerData: jsonData.playerData,
      playerName: jsonData.playerName,
      playerDescription: jsonData.playerDescription,
      userBet: jsonData.userBet,
      betRating: jsonData.betRating,
      suggestion: jsonData.suggestion,
      playerFacts: jsonData.playerFacts,
      threshold: jsonData.threshold,
      playerImage: jsonData.playerImage,
      teamLogo: jsonData.teamLogo,
      teamBackground: jsonData.teamBackground,
      team1: jsonData.team1,
      team2: jsonData.team2,
      betType: jsonData.betType
    }
  ];

  const handleEvaluateBet = (bet) => {
    navigation.navigate("BetDetailScreen", { bet: formatJSON(bet) });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topSection}>
        <Text style={styles.title}>{betData[0].playerName}</Text>
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
              onPress={() => navigation.navigate("BetDetailScreen", { bet: bet })}
              key={index}
              style={styles.betItem}
            >
              <ImageIcon
                player={bet.playerImage ? bet.playerImage : null}
                teamBackground={bet.teamBackground ? bet.teamBackground : null}
                teamLogo={bet.teamLogo ? bet.teamLogo : null}
                team1={bet.team1 ? bet.team1 : null}
                team2={bet.team2 ? bet.team2 : null}
                dim={dim}
                style={styles.imageIcon}
              />
              <View style={styles.betText}>
                <View style={styles.betTextContainer}>
                  <Text style={styles.betTitle}>{`${bet.playerName}: `}</Text>
                  <Text
                    style={getStyleForGrade(bet.betRating)}
                  >{`(${bet.betRating})`}</Text>
                </View>
                <Text style={styles.betDescription}>{bet.userBet}</Text>
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
