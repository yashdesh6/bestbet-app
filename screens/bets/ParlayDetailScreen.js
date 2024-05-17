import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import NewBetModal from "../../components/NewBetModal";
import arrowIcon from "../../assets/images/arrow.png";
import { getStyleForGrade, getStyleForStrength } from "../../components/getStyleFromGrade";

const ParlayDetailScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [betData, setBetData] = useState([]);

  useEffect(() => {
    if (route.params?.initialBet) {
      setBetData([route.params.initialBet]);
    }
  }, [route.params?.initialBet]);

  const overallStrength = betData.length > 0 ? betData[0].response.over_under_analysis : "C";
  console.log(betData);

  const handleEvaluateBet = (response) => {
    const newBet = {
      title: "NIKOLA JOKIC",
      grade: response.response.over_under_analysis,
      description: response.response.response.content,
      image: require("../../assets/images/steph.png"), // Replace with actual image if available
    };
    setBetData([newBet, ...betData]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.topSection}>
        {betData.length > 0 && (
          <>
            <Text style={styles.title}>{betData[0].title || "NIKOLA JOKIC"}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>OVERALL STRENGTH: </Text>
              <Text style={getStyleForGrade(overallStrength)}>{overallStrength}</Text>
            </View>
            <View style={styles.strengthBar}>
              <View style={getStyleForStrength(overallStrength)} />
            </View>
          </>
        )}
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
              {bet.image && <Image source={bet.image} />}
              <View style={styles.betText}>
                <View style={styles.betTextContainer}>
                  <Text style={styles.betTitle}>{bet.title || "NIKOLA JOKIC"}: </Text>
                  <Text style={getStyleForGrade(bet.grade)}>{`(${bet.grade})`}</Text>
                </View>
                <Text style={styles.betDescription}>{bet.description}</Text>
              </View>
              <Image style={styles.arrowIcon} source={arrowIcon} />
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

const styles = StyleSheet.create({
  screen: { backgroundColor: "#151719", height: "100%", justifyContent: "flex-start" },
  topSection: { marginTop: "18%", padding: 20, height: "12%" },
  midSection: { height: "65%", padding: 10 },
  bottomSection: { justifyContent: "center", height: "15%", alignItems: "center" },
  title: { color: "white", fontSize: 22, fontFamily: "Inter-Bold", marginBottom: '1%', alignSelf: "flex-start" },
  textContainer: { display: "flex", flexDirection: "row", alignSelf: "flex-start", marginBottom: '2%' },
  subtitle: { color: "white", fontSize: 18, fontFamily: "Inter-Bold", marginBottom: '5%' },
  strengthBar: { height: 4, backgroundColor: "#333", borderRadius: 2, overflow: "hidden", width: "100%", marginBottom: '25%' },
  sectionHeader: { color: "#009afa", fontSize: 18, fontWeight: "bold", marginBottom: '5%', marginLeft: '2%', alignSelf: "flex-start" },
  betItem: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.1)", margin: 10, borderRadius: 20, padding: 20 },
  betText: { flex: 1, marginLeft: 10 },
  betTextContainer: { display: 'flex', flexDirection: 'row' },
  betTitle: { color: "#F7F7F7", fontFamily: "Inter-Bold", fontSize: 18, lineHeight: 22, textTransform: "uppercase" },
  betDescription: { color: "#F7FBFF", fontSize: 16, lineHeight: 18, marginTop: 5 },
  arrowIcon: { width: 20, height: 20 },
  newBetButton: { backgroundColor: "#009AFA", borderRadius: 20, alignItems: "center", justifyContent: 'center', marginBottom: '10%', height: 56, width: '75%' },
  addButtonText: { color: "white", fontSize: 18 },
});

export default ParlayDetailScreen;
