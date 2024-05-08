import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import styles from "./HomeScreenStyles";
import NewBetModal from "../components/NewBetModal"; // Adjust the import path if necessary
import arrowIcon from "../assets/images/arrow.png";
import menuIcon from "../assets/images/menuIcon.png";

const parlayData = [
  {
    title: "GSW WINS",
    grade: "A+",
    description: "Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...",
    image: require("../assets/images/teams.png"),
  },
  {
    title: "LEBRON JAMES",
    grade: "B-",
    description:
      "Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...",
    image: require("../assets/images/lebron.png"),
  },
  {
    title: "STEPHEN CURRY",
    grade: "C-",
    description: "Pika-pi Thundershock Parasect deserunt mollit Leech Seed...",
    image: require("../assets/images/steph.png"),
  },
  {
    title: "GSW WINS",
    grade: "A+",
    description: "Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...",
    image: require("../assets/images/teams.png"),
  },
  {
    title: "LEBRON JAMES",
    grade: "B-",
    description:
      "Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...",
    image: require("../assets/images/lebron.png"),
  },
  {
    title: "STEPHEN CURRY",
    grade: "C-",
    description: "Pika-pi Thundershock Parasect deserunt mollit Leech Seed...",
    image: require("../assets/images/steph.png"),
  },
  {
    title: "GSW WINS",
    grade: "A+",
    description: "Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...",
    image: require("../assets/images/teams.png"),
  },
  {
    title: "LEBRON JAMES",
    grade: "B-",
    description:
      "Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...",
    image: require("../assets/images/lebron.png"),
  },
  {
    title: "STEPHEN CURRY",
    grade: "C-",
    description: "Pika-pi Thundershock Parasect deserunt mollit Leech Seed...",
    image: require("../assets/images/steph.png"),
  },
  {
    title: "GSW WINS",
    grade: "A+",
    description: "Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...",
    image: require("../assets/images/teams.png"),
  },
  {
    title: "LEBRON JAMES",
    grade: "B-",
    description:
      "Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...",
    image: require("../assets/images/lebron.png"),
  },
  {
    title: "STEPHEN CURRY",
    grade: "C-",
    description: "Pika-pi Thundershock Parasect deserunt mollit Leech Seed...",
    image: require("../assets/images/steph.png"),
  },
  {
    title: "GSW WINS",
    grade: "A+",
    description: "Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...",
    image: require("../assets/images/teams.png"),
  },
  {
    title: "LEBRON JAMES",
    grade: "B-",
    description:
      "Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...",
    image: require("../assets/images/lebron.png"),
  },
  {
    title: "STEPHEN CURRY",
    grade: "C-",
    description: "Pika-pi Thundershock Parasect deserunt mollit Leech Seed...",
    image: require("../assets/images/steph.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const username = "SHAI";

  const colorList = [
    {offset: '0%', color: '#231557', opacity: '1'},
    {offset: '29%', color: '#44107A', opacity: '1'},
    {offset: '67%', color: '#FF1361', opacity: '1'},
    {offset: '100%', color: '#FFF800', opacity: '1'}
  ]

  return (
    <View style={styles.screen}>
      <View style={styles.topSection}>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Image source={menuIcon} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>WELCOME, JOHNNY</Text>
          <Text style={styles.subtitle}>
            Let's get started on your next bet!
          </Text>
        </View>
      </View>
      <View style={styles.midSection}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>EVALUATE PREVIOUS PARLAYS</Text>
          <TouchableOpacity>
            <Image source={{ uri: "info_icon_url" }} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={"Search Parlay"}
            placeholderTextColor={"#F7F7F7"}
          />
        </View>
        <ScrollView>
          {parlayData.map((parlay, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ParlayDetailScreen")}
              key={index}
              style={styles.parlayItem}
            >
                <Image source={parlay.image}/>
                <View style={styles.parlayText}>
                  <Text
                    style={styles.parlayTitle}
                  >{`${parlay.title}: (${parlay.grade})`}</Text>
                  <Text style={styles.parlayDescription}>
                    {parlay.description}
                  </Text>
                </View>
                <Image style={styles.arrowIcon} source={arrowIcon} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.newParlayButton}>
          <Text style={styles.newParlayText}>New Parlay +</Text>
        </TouchableOpacity>
      </View>
    </View>

    /*
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>WELCOME, {username}!</Text>
          <Text style={styles.subHeaderText}>
            Let's get started on your next bet!
          </Text>

          <Text style={styles.sectionHeader}>EVALUATE PREVIOUS PARLAYS</Text>
          <TextInput
            style={styles.input}
            placeholder="Search Parlay"
            placeholderTextColor="#d3d3d3"
          />
          <View>
            {parlayData.map((parlay, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ParlayDetailScreen")}
                key={index}
                style={styles.parlayItem}
              >
                <Image source={parlay.image} style={styles.parlayImage} />
                <View style={styles.parlayTextContainer}>
                  <Text
                    style={styles.parlayTitle}
                  >{`${parlay.title}: (${parlay.grade})`}</Text>
                  <Text style={styles.parlayDescription}>
                    {parlay.description}
                  </Text>
                </View>
                <Image
                  source={{ uri: "arrow_icon_url" }}
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.newParlayButton}
      >
        <Text style={styles.buttonText}>New Parlay +</Text>
      </TouchableOpacity>
      <NewBetModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onEvaluateBet={(betData) => {
          console.log("Bet evaluated:", betData);
          setModalVisible(false);
        }}
        navigation={navigation}
      />
    </View>
    */
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Equivalent to bg-zinc-950
  },
  contentContainer: {
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    marginVertical: 24,
  },
  subHeaderText: {
    color: "#b3b3b3", // Equivalent to text-gray-300
    marginBottom: 16,
  },
  sectionHeader: {
    color: "#007aff", // Close approximation for text-blue-500
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#333",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  parlayItem: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  parlayImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  parlayTextContainer: {
    flex: 1,
  },
  parlayTitle: {
    color: "white",
    fontSize: 18,
  },
  parlayDescription: {
    color: "#666",
  },
  newParlayButton: {
    backgroundColor: "#007aff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    margin: 16,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});*/

export default HomeScreen;
