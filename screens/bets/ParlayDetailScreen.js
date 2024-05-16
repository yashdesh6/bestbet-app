import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import NewBetModal from "../../components/NewBetModal";
import arrowIcon from "../../assets/images/arrow.png";
import { getStyleForGrade, getStyleForStrength } from "../../components/getStyleFromGrade";

const ParlayDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const overallStrength = "C";

  const betData = [
    {
      title: "STEPHEN CURRY",
      grade: "C-",
      description:
        "Stephen Curry to score over 27.5 points against the Celtics",
      image: require("../../assets/images/steph.png"), // Ensure the image path is correct
    },
    {
      title: "STEPHEN CURRY",
      grade: "C-",
      description:
        "Stephen Curry to score over 27.5 points against the Celtics",
      image: require("../../assets/images/steph.png"), // Ensure the image path is correct
    },
    {
      title: "STEPHEN CURRY",
      grade: "C-",
      description:
        "Stephen Curry to score over 27.5 points against the Celtics",
      image: require("../../assets/images/steph.png"), // Ensure the image path is correct
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
          <Text style={getStyleForGrade(overallStrength)}>{overallStrength}</Text>
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
              <Image source={bet.image} />
              <View style={styles.betText}>
                <View style={styles.betTextContainer}>
                <Text style={styles.betTitle}>{`${bet.title}: `}</Text>
                <Text
                  style={getStyleForGrade(bet.grade)}
                >{`(${bet.grade})`}</Text>
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
  screen: {
    backgroundColor: "#151719",
    height: "100%",
    justifyContent: "flex-start",
  },
  topSection: {
    marginTop: "18%",
    padding: 20,
    height: "12%",
  },
  midSection: {
    height: "65%",
    padding: 10,
  },
  bottomSection: {
    justifyContent: "center",
    height: "15%",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontFamily: "Inter-Bold",
    marginBottom: '1%',
    alignSelf: "flex-start",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: '2%',
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Inter-Bold",
    marginBottom: '5%',
  },
  strengthBar: {
    height: 4,
    backgroundColor: "#333", // Equivalent to bg-gray-700
    borderRadius: 2,
    overflow: "hidden",
    width: "100%",
    marginBottom: '25%',
  },
  sectionHeader: {
    color: "#009afa", // Equivalent to text-blue-500
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: '5%',
    marginLeft: '2%',
    alignSelf: "flex-start",
  },
  betItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: 10,
    borderRadius: 20,
    padding: 20,
  },
  betText: {
    flex: 1,
    marginLeft: 10,
  },
  betTextContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  betTitle: {
    color: "#F7F7F7",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betDescription: {
    color: "#F7FBFF",
    fontSize: 16,
    lineHeight: 18,
    marginTop: 5,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  newBetButton: {
    backgroundColor: "#009AFA",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: '10%',
    height: 56,
    width: '75%'
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ParlayDetailScreen;
