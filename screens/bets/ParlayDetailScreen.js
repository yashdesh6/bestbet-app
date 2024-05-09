import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import NewBetModal from "../../components/NewBetModal"; // Adjust the path as needed
import arrowIcon from "../../assets/images/arrow.png";

const getStyleForGrade = (grade) => {
  let style;
  if (grade.startsWith("A")) {
    style = styles.betGradeGreen;
  } else if (grade.startsWith("B")) {
    style = styles.betGradeYellow;
  } else if (grade.startsWith("C")) {
    style = styles.betGradeRed;
  } else {
    style = styles.betGradeDefault;
  }
  return style;
};

const ParlayDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.strengthText}>{betData[0].grade}</Text>
        </View>
        <View style={styles.strengthBar}>
          <View style={styles.strengthIndicator} />
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
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add Bet +</Text>
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
    marginTop: "20%",
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
    marginBottom: 4,
    alignSelf: "flex-start",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "Inter-Bold",
    marginBottom: 16,
  },
  strengthText: {
    color: "#FF6257",
    fontSize: 18,
    fontFamily: "Inter-Bold",
    marginBottom: 16,
  },
  strengthBar: {
    height: 4,
    backgroundColor: "#333", // Equivalent to bg-gray-700
    borderRadius: 2,
    overflow: "hidden",
    width: "100%",
    marginBottom: 75,
  },
  strengthIndicator: {
    height: "100%",
    width: "33%", // Example percentage
    backgroundColor: "#dc143c", // Equivalent to bg-red-600
  },
  sectionHeader: {
    color: "#009afa", // Equivalent to text-blue-500
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
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
  betGradeGreen: {
    color: "#1DCE86",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betGradeYellow: {
    color: "#E5A500",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betGradeRed: {
    color: "#FF6257",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 22,
    textTransform: "uppercase",
  },
  betGradeDefault: {
    color: "black",
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
  addButton: {
    backgroundColor: "#007aff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    margin: 16,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ParlayDetailScreen;
