import React from "react";
import { View, Text, ScrollView } from "react-native";
import newDummyData from "../../newDummy.json";
import { getStyleForGrade } from "../../components/functions/getStyleFromGrade";
import InfoBox from "../../components/InfoBox";
import Fact from "../../components/Fact";
import GraphCarousel from "../../components/GraphCarousel";
import formatJSON from "../../components/functions/formatJSON";
import styles from "./styles/BetDetailsScreenStyles";
import ImageIcon from "../../components/ImageIcon";
import { exGradient, exTeam1, exTeam2 } from "../../assets/const";

const BetDetailScreen = () => {
  const dim = 120;
  const betData = formatJSON(newDummyData);
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* TODO Implement in actuality once you receive actual JSON */}
        <ImageIcon
          gradient={exGradient}
          player={betData.playerImage}
          teamLogo={exTeam1}
          dim={dim}
          style={{ width: dim, height: dim, marginBottom: 16 }}
        />

        {/* EXAMPLE FOR TEAM VERSUS TEAM */}
        {/* <ImageIcon
          team1={exTeam1}
          team2={exTeam2}
          dim={dim}
          style={{ width: dim, height: dim, marginBottom: 16 }}
        /> */}

        <Text style={styles.title}>{betData.playerName}</Text>
        <Text style={styles.description}>{betData.playerDescription}</Text>
      </View>
      <ScrollView style={styles.contentSection}>
        <InfoBox title={"YOUR BET"}>
          <Text style={styles.betText}>{betData.userBet}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.strengthText}>STRENGTH: </Text>
            <Text style={getStyleForGrade(betData.betRating)}>
              {betData.betRating}
            </Text>
          </View>
        </InfoBox>
        <View style={styles.line} />
        <InfoBox title={"WE SUGGEST"} style={{ paddingHorizontal: 24 }}>
          <Text style={styles.suggestText}>{betData.suggestion}</Text>
        </InfoBox>
        <View style={styles.line} />
        <Text style={styles.infoHeader}>INFO</Text>
        <Text style={styles.subsectionHeader}>FACTS</Text>
        <View style={styles.facts}>
          {betData.playerFacts.map((fact, index) => (
            <Fact fact={fact} key={index} number={index} />
          ))}
        </View>
        <Text style={styles.subsectionHeader}>STATISTICS</Text>
        <GraphCarousel data={newDummyData} type={"Points"} />
      </ScrollView>
    </View>
  );
};

export default BetDetailScreen;
