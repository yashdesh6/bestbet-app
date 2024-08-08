import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import NewBetModal from "../../components/NewBetModal";
import {
  getStyleForGrade,
  getStyleForStrength,
} from "../../components/functions/getStyleFromGrade";
import styles from "./styles/ParlayDetailsScreenStyles";
import { useSQLiteContext } from "expo-sqlite";
import { arrowIcon } from "../../assets/const";
import ImageIcon from "../../components/ImageIcon";

const ParlayDetailScreen = ({ navigation, route }) => {
  const { parlayId } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [bets, setBets] = useState([]);
  const overallStrength = "C-";
  const dim = 64;
  const db = useSQLiteContext();

  useEffect(() => {
    const fetchBets = async () => {
      const result = await db.getAllAsync('SELECT * FROM Bets WHERE parlay_id = ?', [parlayId]);
      setBets(result);
    };

    fetchBets();
  }, [db, parlayId]);

  const handleEvaluateBet = (betInput) => {
    console.log("Evaluating bet:", betInput);
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Parlay Details</Text>
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
          {bets.map((bet, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("BetDetailScreen")}
              key={index}
              style={styles.betItem}
            >
              <ImageIcon
                player={bet.playerImage ? bet.playerImage : null}
                teamBackground={bet.teamBackground ? bet.teamBackground : null}
                teamLogo={bet.teamLogo ? bet.teamLogo : null}
                dim={dim}
                style={styles.imageIcon}
              />
              <View style={styles.betText}>
                <View style={styles.betTextContainer}>
                  <Text style={styles.betTitle}>{`${bet.user_prompt}: `}</Text>
                  <Text
                    style={getStyleForGrade(bet.grade)}
                  >{`(${bet.grade})`}</Text>
                </View>
                <Text style={styles.betDescription}>{bet.over_under_analysis}</Text>
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
          parlayId={parlayId} // Pass the parlayId here
        />
      </View>
    </View>
  );
};

export default ParlayDetailScreen;
