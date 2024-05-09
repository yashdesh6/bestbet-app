import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import styles from "./HomeScreenStyles";
import NewBetModal from "../components/NewBetModal";
import arrowIcon from "../assets/images/arrow.png";

const getStyleForGrade = (grade) => {
  let style;
  if (grade.startsWith("A")) {
    style = styles.parlayGradeGreen;
  } else if (grade.startsWith("B")) {
    style = styles.parlayGradeYellow;
  } else if (grade.startsWith("C")) {
    style = styles.parlayGradeRed;
  } else {
    style = styles.parlayGradeDefault;
  }
  return style;
};

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

  return (
    <View style={styles.screen}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>WELCOME, {username}</Text>
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
        {/* Feature Flag the search bar
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={"Search Parlay"}
            placeholderTextColor={"#F7F7F7"}
          />
        </View> */}
        <ScrollView>
          {parlayData.map((parlay, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ParlayDetailScreen")}
              key={index}
              style={styles.parlayItem}
            >
              <Image source={parlay.image} />
              <View style={styles.parlayText}>
                <View style={styles.parlayTextContainer}>
                  <Text style={styles.parlayTitle}>{`${parlay.title}: `}</Text>
                  <Text
                    style={getStyleForGrade(parlay.grade)}
                  >{`(${parlay.grade})`}</Text>
                </View>
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
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.newParlayButton}
        >
          <Text style={styles.newParlayText}>New Parlay +</Text>
        </TouchableOpacity>
      </View>
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
  );
};

export default HomeScreen;
