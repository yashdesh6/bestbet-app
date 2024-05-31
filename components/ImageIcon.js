import { View, Text, Image, StyleSheet } from "react-native";
import { placeHolder } from "../assets/const";

const ImageIcon = ({
  player,
  gradient,
  teamLogo,
  team1,
  team2,
  dim,
  style,
}) => {
  if (player != null && gradient != null && teamLogo != null) {
    return (
      <View style={style}>
        <Image source={{ uri: gradient }} style={styles.gradient} />
        <Image
          source={{ uri: player }}
          style={[styles.player, { borderRadius: dim * 0.45 }]}
        />
        <Image source={{ uri: teamLogo }} style={styles.teamLogo} />
      </View>
    );
  } else if (team1 != null && team2 != null) {
    return (
      <View style={[style, { height: dim * (8 / 5) }]}>
        <Image source={{ uri: team1 }} style={styles.team1} />
        <View style={styles.vsContainer}>
          <Text style={styles.vsText}>VS.</Text>
        </View>
        <Image source={{ uri: team2 }} style={styles.team2} />
        <View style={styles.line1} />
        <View style={styles.line2} />
      </View>
    );
  } else {
    return <Image source={{ uri: placeHolder }} style={style} />;
  }
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
  },
  player: {
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "90%",
    height: "90%",
  },
  teamLogo: {
    position: "absolute",
    top: "65%",
    left: "65%",
    width: "35%",
    height: "35%",
  },
  vsContainer: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  vsText: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: "white",
  },
  team1: {
    width: "64%",
    height: "40%",
    marginRight: "10%",
  },
  team2: {
    width: "64%",
    height: "40%",
    alignSelf: "flex-end",
  },
  line1: {
    position: "absolute",
    width: 2,
    right: "20%",
    bottom: "55%",
    height: "25%",
    backgroundColor: "#F7F7F7",
    transform: [{ rotate: "45deg" }],
  },
  line2: {
    position: "absolute",
    width: 2,
    left: "15%",
    top: "55%",
    height: "25%",
    backgroundColor: "#F7F7F7",
    transform: [{ rotate: "45deg" }],
  },
});

export default ImageIcon;
