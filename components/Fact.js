import { BlurView } from "expo-blur";
import { StyleSheet, View, Text, Image } from "react-native";
import { starIcon, targetIcon, trophyIcon } from "../assets/const";



const Fact = (props) => {
  let image = targetIcon;
  if (props.number == 1) {
    image = trophyIcon;
  } else if (props.number == 2) {
    image = starIcon;
  }

  return (
    <BlurView tint={"dark"} style={styles.factContainer}>
      <View style={styles.circle}>
        <Image
          style={styles.factImage}
          source={{ uri: image }}
        />
      </View>
      <Text style={styles.factText}>{props.fact}</Text>
    </BlurView>
  );
};

export default Fact;

const styles = StyleSheet.create({
  factContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    overflow: "hidden",
  },
  circle: {
    width: 47,
    height: 47,
    marginRight: 25,
    borderRadius: 100,
    backgroundColor: "#009AFA",
  },
  factImage: {
    position: "relative",
    overflow: 'visible',
    width: "70%",
    height: "70%",
    top: "15%",
    left: "15%",
  },
  factText: {
    flexShrink: -1,
    color: "#F7F7F7",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
});
